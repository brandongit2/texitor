import {create} from "zustand"

export type EditorStore = {
	pageWidth: number // in inches
	setPageWidth: (pageWidth: number) => void
}

const useEditorStore = create<EditorStore>((set) => ({
	pageWidth: 8.5,
	setPageWidth: (pageWidth) => set({pageWidth}),
}))

export default useEditorStore
