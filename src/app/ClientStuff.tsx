"use client"

import {useEffect} from "react"

import type {ReactElement} from "react"

export default function ClientStuff(): ReactElement | null {
	useEffect(() => {
		const onResize = () => {
			document.documentElement.style.setProperty(
				`--estimated-visual-viewport-height`,
				`${window.visualViewport ? window.visualViewport.height : window.innerHeight}px`,
			)
			document.documentElement.style.setProperty(
				`--visual-viewport-height`,
				`${window.visualViewport ? window.visualViewport.height : window.innerHeight}px`,
			)
		}

		window.addEventListener(`resize`, onResize)
		window.visualViewport?.addEventListener(`resize`, onResize)
		return () => {
			window.removeEventListener(`resize`, onResize)
			window.visualViewport?.removeEventListener(`resize`, onResize)
		}
	})

	return null
}
