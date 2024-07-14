import React from 'react'

const HeroActionButtons = () => {
  return (
    <div className="flex items-center justify-center">
        <a href="#"
            className="px-7 py-3 bg-transparent text-[#1c3664] border-[#1c3664] border rounded-xl transition hover:bg-[#1c3664] hover:text-white"
        >
            Register your facility
        </a>
        <a href="#"
            className="text-white px-7 py-3 bg-[#1c3664] border rounded-xl ml-2"
        >
            Learn about Heflema
        </a>
    </div>
  )
}

export default HeroActionButtons