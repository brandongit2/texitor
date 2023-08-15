import {nanoid} from "nanoid"

import type {DocumentState, Path, Section} from "./useDocumentState"

import useDocumentState from "./useDocumentState"

const DocumentTree = {
	addSection: (data: Omit<Section, "id" | "root" | "childrenIds">, path: Path): string => {
		const id = nanoid()
		useDocumentState.setState((state) => {
			let currentSection: Section | undefined = DocumentTree.getRootSection(state)
			for (let i = 0; i < path.length - 1; i++) {
				const pathSegment = path[i]
				const index = getIndexFromPathSegment(pathSegment, currentSection.childrenIds.length)
				currentSection = DocumentTree.getSectionById(state, currentSection!.childrenIds[index])
				if (!currentSection) throw new Error(`Could not find section at path ${path.slice(0, i + 1)}`)
			}

			const newSection: Section = {
				...data,
				id,
				root: false,
				childrenIds: [],
			}
			let index = path.at(-1)!
			index = index < 0 ? currentSection.childrenIds.length + index + 1 : index
			currentSection.childrenIds.splice(index, 0, newSection.id)
			state.sections.push(newSection)
		})

		return id
	},

	getChildrenSections: (documentState: DocumentState, id: string): Section[] => {
		const section = DocumentTree.getSectionById(documentState, id)
		if (!section) return []

		return section.childrenIds
			.map((id) => DocumentTree.getSectionById(documentState, id))
			.filter((section): section is Section => section !== undefined)
	},

	getParentSection: (documentState: DocumentState, id: string): Section | undefined =>
		documentState.sections.find((section) => section.childrenIds.includes(id)),

	getRootSection: (documentState: DocumentState): Section => {
		const rootSection = documentState.sections.find((section) => section.root)
		if (!rootSection) throw new Error(`Could not find root section`)
		return rootSection
	},

	getSectionById: (documentState: DocumentState, id: string): Section | undefined =>
		documentState.sections.find((section) => section.id === id),

	getSectionByPath: (documentState: DocumentState, path: Path): Section | undefined => {
		let section: Section | undefined = DocumentTree.getRootSection(documentState)
		for (const pathSegment of path) {
			section = DocumentTree.getSectionById(documentState, section!.childrenIds[pathSegment])
			if (!section) return undefined
		}
		return section
	},

	getSiblingSections: (documentState: DocumentState, id: string): Section[] => {
		const section = DocumentTree.getSectionById(documentState, id)
		if (!section) return []

		const parentSection = DocumentTree.getParentSection(documentState, id)
		if (!parentSection) return []

		return parentSection.childrenIds
			.map((id) => DocumentTree.getSectionById(documentState, id))
			.filter((section): section is Section => section !== undefined)
	},

	moveSection: (id: string, path: Path): void => {
		useDocumentState.setState((state) => {
			const section = DocumentTree.getSectionById(state, id)
			if (!section) throw new Error(`Could not find section with id ${id}`)

			const parentSection = DocumentTree.getParentSection(state, id)
			if (!parentSection) throw new Error(`Could not find parent section of section with id ${id}`)

			parentSection.childrenIds.splice(parentSection.childrenIds.indexOf(id), 1)

			let currentSection: Section | undefined = DocumentTree.getRootSection(state)
			for (let i = 0; i < path.length - 1; i++) {
				const pathSegment = path[i]
				const index = getIndexFromPathSegment(pathSegment, currentSection.childrenIds.length)
				currentSection = DocumentTree.getSectionById(state, currentSection!.childrenIds[index])
				if (!currentSection) throw new Error(`Could not find section at path ${path.slice(0, i + 1)}`)
			}

			const index = path.at(-1)!
			currentSection.childrenIds.splice(index, 0, id)
		})
	},

	removeSection: (id: string): void => {
		useDocumentState.setState((state) => {
			const section = DocumentTree.getSectionById(state, id)
			if (!section) throw new Error(`Could not find section with id ${id}`)

			const parentSection = DocumentTree.getParentSection(state, id)
			if (!parentSection) throw new Error(`Could not find parent section of section with id ${id}`)

			parentSection.childrenIds.splice(parentSection.childrenIds.indexOf(id), 1)
			state.sections.splice(state.sections.indexOf(section), 1)
		})
	},

	updateSection: (id: string, data: Partial<Omit<Section, "id" | "root" | "childrenIds">>): void => {
		useDocumentState.setState((state) => {
			const section = DocumentTree.getSectionById(state, id)
			if (!section) throw new Error(`Could not find section with id ${id}`)

			Object.assign(section, data)
		})
	},
}

export default DocumentTree

function getIndexFromPathSegment(pathSegment: number, childrenIdsLength: number): number {
	let index = pathSegment < 0 ? childrenIdsLength + pathSegment : pathSegment
	index = Math.min(Math.max(index, childrenIdsLength - 1), -childrenIdsLength)
	return index
}
