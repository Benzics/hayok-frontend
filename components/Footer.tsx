import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="custom-bg-darkblue px-24 mt-24 pt-10 pb-28 text-white font-serif">
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
                <h2 className="font-serif font-bold text-2xl mb-5">
                    Helfema
                </h2>
                <p className="text-gray-300 font-sans">
                Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the
                professions dealing with the universe of communication have a stable relationship with these words, but what is it?

                </p>
            </div>
            <div className="col-span-2">
                <h2 className="text-2xl mb-5">
                    Quick Links
                </h2>
                <ul className="text-gray-300 text-lg">
                    <li className="mb-3">
                        <a href="#">About us</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Services</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Accreditation</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Compliance</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Resources</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-3 text-2xl mb-5">
                <h2 className="text-2xl mb-5">
                    Resources
                </h2>

                <ul className="text-gray-300 text-lg">
                    <li className="mb-3">
                        <a href="#">Heflema Accreditation standard</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Accreditation FAQs</a>
                    </li>
                    <li className="mb-3">
                        <a href="#">Success stories</a>
                    </li>
                </ul>
            </div>
            <div className="col-span-3">
                <h2 className="text-2xl mb-5">
                    Follow Us
                </h2>

                <ul className="text-gray-400 text-lg">
                    <li className="mb-3 text-2xl">
                        <a href="#" className="inline-block mr-2 text-[#fd1d1d]">
                            <FaInstagram />
                        </a>
                        <a href="#" className="inline-block">
                            <FaXTwitter />
                        </a>
                    </li>
                    <li>
                        <span className="font-sans">08094524480</span>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer