import {forwardRef} from "react"

import type {ReactElement} from "react"

export type InputProps = JSX.IntrinsicElements["input"]

const Input = forwardRef<HTMLInputElement, InputProps>(function LinkWithRef(props, ref): ReactElement | null {
	return <input {...props} data-wrapped ref={ref} />
})

export default Input
