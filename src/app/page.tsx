import type {ReactElement} from "react"

import Editor from "./Editor"
import Ruler from "./Ruler"

export default function Home(): ReactElement | null {
	return (
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
					<div className="flex gap-4 text-xl">
						<button type="button" className="font-bold">
							B
						</button>
						<button type="button" className="italic">
							I
						</button>
						<button type="button" className="underline">
							U
						</button>
						<button type="button" className="line-through">
							S
						</button>
						<button type="button">A</button>
						<button type="button">A</button>
					</div>
				</div>
				<div />
			</div>
			<div className="h-4" />
			<Ruler />
			<div className="h-4" />
			<Editor />
		</div>
	)
}
