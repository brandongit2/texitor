import clsx from "clsx"

import type {ReactElement} from "react"
import type {RenderLeafProps} from "slate-react"

export default function Leaf(props: RenderLeafProps): ReactElement | null {
	return (
		<span
			{...props.attributes}
			className={clsx(
				props.leaf.bold && `font-bold`,
				props.leaf.italic && `italic`,
				props.leaf.underline && `underline`,
			)}
		>
			{props.children}
		</span>
	)
}
