import {ReactElement, ReactNode} from "react"

export const metadata = {
	title: "Texitor",
}

export type RootLayoutProps = {
	children: ReactNode
}

export default function RootLayout({children}: RootLayoutProps): ReactElement | null {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
