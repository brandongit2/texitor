import {nanoid} from "nanoid"
import {create} from "zustand"
import {immer} from "zustand/middleware/immer"

export type Path = number[]

export type Section = {
	id: string
	title: string
	root: boolean
	childrenIds: string[]
	childrenIdsUnordered: string[]
}

export type DocumentState = {
	sections: Section[]
}

const useDocumentState = create(
	immer<DocumentState>(() => ({
		sections: [
			{
				id: nanoid(),
				title: `[root section]`,
				root: true,
				childrenIds: [],
				childrenIdsUnordered: [],
			},
		],
	})),
)

export default useDocumentState
