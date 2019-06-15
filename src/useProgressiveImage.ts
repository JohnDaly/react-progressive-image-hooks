// Internal Dependencies
import { useAsyncImage } from './useAsyncImage'

const useProgressiveImage = (placeholderSrc: string, fullSrc: string) => {
    const placeholder = useAsyncImage(placeholderSrc)
    const fullImage = useAsyncImage(fullSrc)

    return [placeholder, fullImage]
}

export default useProgressiveImage
