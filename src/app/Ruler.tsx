"use client"

import * as Slider from "@radix-ui/react-slider"

import type {ReactElement} from "react"

import useEditorStore from "@/useEditorStore"

export default function Ruler(): ReactElement | null {
	const pageWidth = useEditorStore((state) => state.pageWidth)
	const setPageWidth = useEditorStore((state) => state.setPageWidth)

	return (
		<div>
			<Slider.Root className="relative flex select-none touch-none w-full" defaultValue={[25, 75]} max={100} step={1}>
				<Slider.Track className="border-t border-b grow w-full relative border-stone-400 h-3">
					<Slider.Range className="absolute bg-yellow-200 h-full mx-auto" />
				</Slider.Track>
				<Slider.Thumb className="w-3 h-3 block cursor-grab focus:outline-none focus-visible:outline">
					<div className="bg-black w-full h-1/2 top-1/2 relative [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
				</Slider.Thumb>
				<Slider.Thumb className="w-3 h-3 block cursor-grab focus:outline-none focus-visible:outline">
					<div className="bg-black w-full h-1/2 top-1/2 relative [clip-path:polygon(50%_0%,0%_100%,100%_100%)]" />
				</Slider.Thumb>
			</Slider.Root>
		</div>
	)
}
