import React from 'react'

const HeroActionButtons = () => {
  return (
    <div className="flex items-center justify-center mt-3">
        <a href="#"
            className="px-8 py-3 bg-transparent custom-text-darkblue custom-border-darkblue border rounded-xl transition hover:custom-bg-darkblue hover:text-white"
        >
            Register your facility
        </a>
        <a href="#"
            className="text-white px-8 py-3 custom-bg-darkblue border rounded-xl ml-2"
        >
            Learn about Heflema
        </a>
    </div>
  )
}

export default HeroActionButtons