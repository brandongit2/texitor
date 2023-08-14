"use client"

import type {ReactElement} from "react"

import Logo from "@/components/Logo"
import Link from "@/components/wrappers/Link"

export default function Home(): ReactElement | null {
	return (
		<div className="flex flex-col items-center p-4 text-center gap-4">
			<Logo />
			<p>
				Welcome to Texitor! Build complex documents by listing topics, then refining them into sections, and finally
				writing out the full text.
			</p>
			<p>See a demo here: [DEMO]</p>
			<Link href="/editor">New document</Link>
			<a className="line-through">Sign in</a>
		</div>
	)
}
