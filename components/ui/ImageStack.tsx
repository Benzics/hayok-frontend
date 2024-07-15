import React from 'react'

const ImageStack = ({
    image1,
    image2,
    alt1,
    alt2 } :
    {
    image1: string;
    image2: string;
    alt1?: string;
    alt2?: string;
}) => {
  return (
    <>
    <img
        className="absolute w-[75%] -top-2 rounded-tl-3xl rounded-br-3xl"
        src={image1}
        alt={alt1}
    />
    <img
        className="absolute w-[80%] top-24 right-10 z-10 rounded-tl-3xl rounded-br-3xl"
        src={image2}
        alt={alt2}
    />
    </>
  )
}

export default ImageStack