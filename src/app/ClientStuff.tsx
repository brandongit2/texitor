"use client"

import {useEffect} from "react"

import type {ReactElement} from "react"

export default function ClientStuff(): ReactElement | null {
	useEffect(() => {
		const onResize = () => {
			document.documentElement.style.setProperty(
				`--visual-viewport-bottom-offset`,
				`${window.visualViewport ? window.innerHeight - window.visualViewport.height : 0}px`,
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
