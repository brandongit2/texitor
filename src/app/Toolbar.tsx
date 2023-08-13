import {useSlate} from "slate-react"

import type {MouseEventHandler, ReactElement, ReactNode} from "react"

import TexitorEditor from "@/components/slate/TexitorEditor"

export default function Toolbar(): ReactElement | null {
	const editor = useSlate()

	return (
		<div className="flex gap-2">
			<ToolbarButton onClick={() => TexitorEditor.toggleBoldMark(editor)}>
				<span className="font-bold">B</span>
			</ToolbarButton>
			<ToolbarButton onClick={() => TexitorEditor.toggleItalicMark(editor)}>
				<span className="italic">I</span>
			</ToolbarButton>
			<ToolbarButton onClick={() => TexitorEditor.toggleUnderlineMark(editor)}>
				<span className="underline">U</span>
			</ToolbarButton>
		</div>
	)
}

type ToolbarButtonProps = {
	children: ReactNode
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
}

function ToolbarButton({children, onClick}: ToolbarButtonProps): ReactElement | null {
	return (
		<button type="button" onClick={onClick} className="hover:bg-black/20 transition-colors rounded w-6 h-6 text-base">
			{children}
		</button>
	)
}
