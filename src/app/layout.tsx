import {Anek_Latin} from "next/font/google"

import type {ReactElement, ReactNode} from "react"

import "./styles.css"

const anek = Anek_Latin({
	// eslint-disable-next-line @typescript-eslint/quotes
	subsets: ["latin"],
})

export const metadata = {
	title: `Texitor`,
}

export type RootLayoutProps = {
	children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps): ReactElement | null {
	return (
		<html lang="en">
			<body className={anek.className}>{children}</body>
		</html>
	)
}
