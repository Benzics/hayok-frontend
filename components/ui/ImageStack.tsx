import React from 'react'

const ImageStack = ({
    image1,
    image2,
    alt1,
    alt2,
    position = 'left'
 } :
    {
    image1: string;
    image2: string;
    alt1?: string;
    alt2?: string;
    position?: string;
}) => {
  return (
    <>
    <img
        className={`absolute w-[75%] rounded-tl-3xl rounded-br-3xl ${position === 'left' ? ' -top-2 ': 'right-10'}`}
        src={image1}
        alt={alt1}
    />
    <img
        className={`absolute w-[80%] top-24 z-10 rounded-tl-3xl rounded-br-3xl ${position === 'left' ? ' right-10 ': 'right-0 '}`}
        src={image2}
        alt={alt2}
    />
    </>
  )
}

export default ImageStack