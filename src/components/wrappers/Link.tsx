import clsx from "clsx"
import NextLink from "next/link"
import {forwardRef} from "react"

import type {ComponentPropsWithRef, ReactElement} from "react"

export type LinkProps = ComponentPropsWithRef<typeof NextLink>

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function LinkWithRef(props, ref): ReactElement | null {
	return <NextLink {...props} className={clsx(props.className, `text-blue-400 underline`)} ref={ref} />
})

export default Link
