import type {BaseEditor} from "slate"
import type {ReactEditor} from "slate-react"

type CustomElement = {type: "paragraph"; children: CustomText[]}
type CustomText = {text: string; bold?: boolean; italic?: boolean; underline?: boolean}

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor
		Element: CustomElement
		Text: CustomText
	}
}
