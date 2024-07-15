import React from 'react'

const TitleBar = ({
    caption,
    content,
    position = 'left'
} : {
    caption: string;
    content: string;
    position?: 'left' | 'right';
}) => {
  return (
    <div className="px-24 mt-24" style={{textAlign: position }}>
        <div>
            <div className="inline-block bg-[#eff9fe] px-8 py-2">
                <span className="inline-block border-l-4 custom-border-blue pl-2 text-xs">{caption}</span>
            </div>
        </div>
        <h1 className="py-5 text-4xl font-bold font-serif">{content}</h1>
    </div>
  )
}

export default TitleBar