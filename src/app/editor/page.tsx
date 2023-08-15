"use client"

import {useState, type ReactElement} from "react"

import Logo from "@/components/Logo"
import Input from "@/components/wrappers/Input"
import DocumentTree from "@/utils/DocumentTree"
import useDocumentState from "@/utils/useDocumentState"

export default function Editor(): ReactElement | null {
	const documentState = useDocumentState()

	const [title, setTitle] = useState(`untitled document`)
	const [currentTopic, setCurrentTopic] = useState(``)

	return (
		<div className="min-h-[100dvh] flex flex-col">
			<div className="flex bg-yellow-300 sticky top-0 justify-between items-center p-2 border-b border-stone-300">
				<input value={title} className="font-medium" onChange={(v) => setTitle(v.currentTarget.value)} />
				<Logo small />
			</div>
			<ul className="flex flex-col grow gap-4 pl-4 pt-4 pb-4">
				{DocumentTree.getChildrenSections(documentState, DocumentTree.getRootSection(documentState).id).map(
					(section) => (
						<li key={section.id} className="w-full grid grid-cols-[1fr_2rem] gap-4">
							<p>{section.title}</p>
							<div />
						</li>
					),
				)}
			</ul>
			<form
				className="sticky bottom-[--visual-viewport-bottom-offset] left-0 w-full p-2 border-t border-neutral-300 bg-neutral-100"
				onSubmit={(e) => {
					e.preventDefault()
					DocumentTree.addSection(
						{
							title: currentTopic,
						},
						[-1],
					)
					setCurrentTopic(``)
				}}
			>
				<label className="flex gap-2 items-center">
					Add topic:
					<Input
						placeholder="topic"
						value={currentTopic}
						onFocus={() => {
							const initialScroll = window.scrollY
							const handleScroll = () => {
								window.scrollTo({top: initialScroll})
							}

							window.addEventListener(`scroll`, handleScroll)
							setTimeout(() => {
								window.removeEventListener(`scroll`, handleScroll)
							}, 500)
						}}
						onChange={(v) => setCurrentTopic(v.currentTarget.value)}
					/>
				</label>
			</form>
		</div>
	)
}
