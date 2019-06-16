// External Dependencies
import React from 'react'

// Internal Dependencies
import useProgressiveImage from './useProgressiveImage'
import { LoadedImage } from './useAsyncImage'

interface Props {
    placeholderSrc: string
    src: string
    classPrefix?: string
}

export const ProgressiveImage: React.FC<Props> = ({
    placeholderSrc,
    src,
    classPrefix = 'prog-img'
}) => {
    const [placeholder, fullImage] = useProgressiveImage(placeholderSrc, src)

    return (
        <div className={`${classPrefix}--container`}>
            <div className={`${classPrefix}--empty`} />
            {placeholder && <PlaceholderImage {...placeholder} classPrefix={classPrefix} /> }
            {fullImage && <FullImage {...fullImage} classPrefix={classPrefix} /> }
        </div>
    )
}

type LoadedImageProps = LoadedImage & { classPrefix: string }

const PlaceholderImage: React.FC<LoadedImageProps> = ({
    src,
    isCached,
    classPrefix
}) => {
    const placeholderClass = (isCached) ?
        `${classPrefix}--cached ${classPrefix}--blurred` :
        `${classPrefix} ${classPrefix}--blurred ${classPrefix}--loaded`

    return <img className={placeholderClass} src={src} />
}

const FullImage: React.FC<LoadedImageProps> = ({
    src,
    isCached,
    classPrefix
}) => {
    const fullImageClass = (isCached) ? '' : `${classPrefix} ${classPrefix}--loaded`   

    return <img className={fullImageClass} src={src} />
}
