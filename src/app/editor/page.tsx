"use client"

import {useState, type ReactElement} from "react"

import Logo from "@/components/Logo"

export default function Editor(): ReactElement | null {
	const [title, setTitle] = useState(`untitled document`)
	const [topics, setTopics] = useState<string[]>([])
	const [currentTopic, setCurrentTopic] = useState(``)

	return (
		<div>
			<div className="flex justify-between items-center p-2 border-b border-neutral-300">
				<input value={title} onChange={(v) => setTitle(v.currentTarget.value)} />
				<Logo small />
			</div>
			<ul>
				{topics.map((topic) => (
					<li key={topic}>{topic}</li>
				))}
			</ul>
			<form
				className="fixed bottom-[--visual-viewport-bottom-offset] left-0 w-full"
				onSubmit={(e) => {
					e.preventDefault()
					setTopics((topics) => [...topics, currentTopic])
					setCurrentTopic(``)
				}}
			>
				<label>
					Add topic:
					<input placeholder="topic" value={currentTopic} onChange={(v) => setCurrentTopic(v.currentTarget.value)} />
				</label>
			</form>
		</div>
	)
}
