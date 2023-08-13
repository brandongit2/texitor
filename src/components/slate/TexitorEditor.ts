import {Editor} from "slate"

const TexitorEditor = {
	isBoldMarkActive: (editor: Editor): boolean => {
		const marks = Editor.marks(editor)
		return marks ? marks.bold === true : false
	},

	isItalicMarkActive: (editor: Editor): boolean => {
		const marks = Editor.marks(editor)
		return marks ? marks.italic === true : false
	},

	isUnderlineMarkActive: (editor: Editor): boolean => {
		const marks = Editor.marks(editor)
		return marks ? marks.underline === true : false
	},

	toggleBoldMark: (editor: Editor): void => {
		const isActive = TexitorEditor.isBoldMarkActive(editor)
		Editor.addMark(editor, `bold`, isActive ? false : true)
	},

	toggleItalicMark: (editor: Editor): void => {
		const isActive = TexitorEditor.isItalicMarkActive(editor)
		Editor.addMark(editor, `italic`, isActive ? false : true)
	},

	toggleUnderlineMark: (editor: Editor): void => {
		const isActive = TexitorEditor.isUnderlineMarkActive(editor)
		Editor.addMark(editor, `underline`, isActive ? false : true)
	},
}

export default TexitorEditor
