"use client"

import {Editable} from "slate-react"

import type {ReactElement} from "react"

import Leaf from "@/components/slate/Leaf"

export default function Editor(): ReactElement | null {
	return (
		<Editable
			renderLeaf={(props) => <Leaf {...props} />}
			className="border border-black h-96 w-[60rem] max-w-full mx-auto"
		/>
	)
}
