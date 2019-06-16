// External Dependencies
import { useState, useEffect } from 'react'

export interface LoadedImage {
    src: string,
    isCached: boolean
}

export const useAsyncImage = (src: string): LoadedImage | null => {
    const [image, setImage] = useState<LoadedImage | null>(null)

    useEffect(() => {
        const loadingImage = new Image()
        loadingImage.src = src

        // Set up the Event handlers

        // If the image has already completed
        // then we can update the state immediately
        if (loadingImage.complete) {
            setImage({ src, isCached: true })
        }

        // When the image finishes loading
        // update the state, but indicate that
        // the image was not cached
        loadingImage.onload = () => {
            setImage({ src, isCached: false })
        }

        loadingImage.onerror = (err: Event) => {
            setImage(null)
        }

        // Clean up the Event handlers
        return () => {
            if (loadingImage) {
                loadingImage.onload = null
                loadingImage.onerror = null
            }
        }
    },[src, setImage])

    return image
}
