import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white ">
        <div className="relative flex h-20 items-center justify-between">
            <div className="left-0">
                <h1 className="px-5 custom-text-blue font-bold text-3xl">Heflema</h1>
            </div>
            <div>
                <div className="flex">
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Home</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Accreditation</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Compliance</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Services</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Resources</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500 transition hover:bg-gray-200">Contact Us</a>
                </div>
            </div>
            <div className="right-0">
                <div className="flex items-center justify-between">
                    <button className="px-6 py-2 bg-transparent border custom-border-darkblue rounded-3xl text-sm transition hover:custom-bg-darkblue hover:text-white">Sign in</button>
                    <button className="ml-3 px-6 py-2 custom-bg-darkblue text-white border custom-border-darkblue rounded-3xl text-sm">Sign up</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar