import clsx from "clsx"
import {Anek_Latin} from "next/font/google"

import type {Metadata} from "next"
import type {ReactElement, ReactNode} from "react"

import ClientStuff from "./ClientStuff"
import "./styles.css"

const anek = Anek_Latin({
	// eslint-disable-next-line @typescript-eslint/quotes
	subsets: ["latin"],
})

export const metadata: Metadata = {
	title: `Texitor`,
	viewport: `width=device-width, user-scalable=no, interactive-widget=resizes-content`,
}

export type RootLayoutProps = {
	children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps): ReactElement | null {
	return (
		<>
			<html lang="en" className="h-[100dvh]">
				<body className={clsx(anek.className, `h-full`)}>{children}</body>
			</html>

			<ClientStuff />
		</>
	)
}
