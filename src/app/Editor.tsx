"use client"

import {useState} from "react"
import {createEditor} from "slate"
import {Editable, Slate, withReact} from "slate-react"

import type {ReactElement} from "react"

import Toolbar from "./Toolbar"

export default function Editor(): ReactElement | null {
	const [editor] = useState(() => withReact(createEditor()))

	return (
		<Slate editor={editor} initialValue={[{type: `paragraph`, children: [{text: ``}]}]}>
			<Editable className="border border-black" />
			<Toolbar />
		</Slate>
	)
}
