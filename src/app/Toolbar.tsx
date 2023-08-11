import {useSlate} from "slate-react"

import type {ReactElement} from "react"

export default function Toolbar(): ReactElement | null {
	const editor = useSlate()

	return (
		<div className="bg-slate-700 w-fit fixed bottom-4 left-1/2 -translate-x-1/2 rounded border border-slate-200 text-white px-4 py-2 flex gap-4">
			<button
				type="button"
				onClick={() => editor.insertNode({type: `paragraph`, children: [{text: ``}]}, {at: [editor.children.length]})}
			>
				add block
			</button>
			<button type="button" onClick={() => editor.addMark(``, true)}>
				bold
			</button>
		</div>
	)
}
