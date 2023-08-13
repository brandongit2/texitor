"use client"

import {useState} from "react"
import {createEditor} from "slate"
import {Slate, withReact} from "slate-react"

import type {ReactElement} from "react"

import Editor from "./Editor"
import Ruler from "./Ruler"
import Toolbar from "./Toolbar"

export default function Home(): ReactElement | null {
	const [editor] = useState(() => withReact(createEditor()))

	return (
		<Slate editor={editor} initialValue={[{type: `paragraph`, children: [{text: ``}]}]}>
			<div>
				<div
					className="bg-amber-300 grid h-24"
					style={{gridTemplateColumns: `minmax(7.5rem, 1fr) minmax(0px, 60rem) minmax(1rem, 1fr)`}}
				>
					<div className="flex items-center pl-6">
						<div className="relative border border-black px-2 py-0.5">
							<p className="text-2xl font-black">texitor</p>
							<div className="absolute bottom-[0.2rem] left-2 w-[calc(100%-1rem)] h-1 bg-black" />
						</div>
					</div>
					<div className="px-6 flex items-center justify-between">
						<div className="flex flex-col">
							<p className="text-xl">document title</p>
							<p className="text-sm">last edited 6 mins ago</p>
						</div>
						<Toolbar />
					</div>
					<div />
				</div>
				<div className="h-4" />
				<Ruler />
				<div className="h-4" />
				<Editor />
			</div>
		</Slate>
	)
}
