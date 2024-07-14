import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-white ">
        <div className="relative flex h-20 items-center justify-between">
            <div className="left-0">LOGO</div>
            <div>
                <div className="flex">
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Home</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Accreditation</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Compliance</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Services</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Resources</a>
                    <a href="#" className="px-5 py-2 text-sm font-medium text-gray-500">Contact Us</a>
                </div>
            </div>
            <div className="right-0">
                <div className="flex items-center justify-between">
                    <button className="px-6 py-2 bg-transparent border border-[#1c3664] rounded-3xl text-sm">Sign in</button>
                    <button className="ml-3 px-6 py-2 bg-[#1c3664] text-white border border-[#1c3664] rounded-3xl text-sm">Sign up</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar