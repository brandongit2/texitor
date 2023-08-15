"use client"

import clsx from "clsx"
import {useState, type ReactElement} from "react"

import Logo from "@/components/Logo"
import Input from "@/components/wrappers/Input"
import DocumentTree from "@/utils/DocumentTree"
import useDocumentState from "@/utils/useDocumentState"

export default function Editor(): ReactElement | null {
	const documentState = useDocumentState()

	const [title, setTitle] = useState(`untitled document`)
	const [currentTopic, setCurrentTopic] = useState(``)
	const [isAddingSection, setIsAddingSection] = useState(false)

	return (
		<div className="h-full overflow-hidden flex flex-col">
			<div data-header className="flex bg-yellow-300 justify-between items-center p-2 border-b border-stone-300">
				<input value={title} className="font-medium" onChange={(v) => setTitle(v.currentTarget.value)} />
				<Logo small />
			</div>
			<div
				className={clsx(
					`grow grid grid-cols-1 transition-[grid-template-rows] duration-75`,
					isAddingSection ? `grid-rows-[0fr_0px_1fr]` : `grid-rows-[1fr_1px_1fr]`,
				)}
			>
				<ul className="flex flex-col gap-4 pl-4 min-h-0">
					{DocumentTree.getChildSections(documentState, DocumentTree.getRootSection(documentState).id).map(
						(section) => (
							<li key={section.id} className="w-full grid mt-4 last:mb-4 grid-cols-[1fr_2rem] gap-4">
								<p>{section.title}</p>
								<div className="grid place-items-center">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src="/right-chevron.svg" alt="see children" className="h-3" />
								</div>
							</li>
						),
					)}
				</ul>
				<hr />
				<div className="bg-neutral-800 text-white">
					{DocumentTree.getUnorderedChildSections(documentState, DocumentTree.getRootSection(documentState).id).map(
						(section) => (
							<p key={section.id}>{section.title}</p>
						),
					)}
				</div>
			</div>
			<form
				className="w-full p-2 border-t border-neutral-300 bg-neutral-100"
				onSubmit={(e) => {
					e.preventDefault()
					DocumentTree.addSection(
						{
							title: currentTopic,
						},
						[],
						true,
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
							setIsAddingSection(true)
						}}
						onBlur={() => {
							setIsAddingSection(false)
						}}
						onChange={(v) => setCurrentTopic(v.currentTarget.value)}
					/>
				</label>
			</form>
		</div>
	)
}
