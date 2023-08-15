import clsx from "clsx"

import type {ReactElement} from "react"

export type LogoProps = {
	small?: boolean
}

export default function Logo({small}: LogoProps): ReactElement | null {
	return (
		<div className={clsx(`aspect-[5/2]`, small ? `w-16` : `w-24`)}>
			<div className="relative border [container-type:size] border-black h-full w-full">
				<p className="text-[60cqh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black">texitor</p>
				<div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[80%] h-[10%] bg-black" />
			</div>
		</div>
	)
}
