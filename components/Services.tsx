import React from 'react'
import TitleBar from './ui/TitleBar'
import ImageStack from './ui/ImageStack'

const Services = () => {
  return (
    <section className="mt-10">
        <TitleBar
            caption="Our services"
            content="Explore Our Comprehensive Range of Services Designed to Elevate Patient Care and Organizational Performance"
        />
        <div className="grid grid-cols-3 px-24">
            <div className="col-span-2">
                <h2 className="font-bold custom-text-blue mt-12 font-serif text-2xl px-6">Accreditation Assistance</h2>
                <ul className="list-disc pl-6 pr-12 mx-6 font-serif">
                    <li className="py-1">
                        Comprehensive support and guidance throughout the accreditation process.
                    </li>
                    <li className="py-1">
                        Assistance with initial assessment, documentation preparation, and readiness evaluation.
                    </li>
                    <li className="py-1">
                        Expertise in navigating accreditation standards and criteria set by accrediting bodies.
                    </li>
                </ul>

                <a
                    href="#"
                    className="mx-6 mt-6 custom-border-blue border inline-block bg-transparent hover:custom-bg-blue hover:text-white custom-text-blue transition px-4 py-1 rounded-3xl"
                >
                    View Accreditation Journey
                </a>
            </div>
            <div className="relative">
                <ImageStack
                    image1="./banner4.jpg"
                    image2="./banner5.jpg"
                    alt1="Our services"
                    alt2="Our services"
                    position="right"
                />
            </div>
        </div>

        <div className="mt-28 border-t border-gray-400 mx-24 py-12 px-6">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3 className="font-serif text-gray-500 font-bold text-2xl">
                        Educational and Improvement Resources
                    </h3>
                </div>
                <div className="text-right">
                    <a href="#" className="border custom-border-blue bg-transparent custom-text-blue px-5 py-2 rounded-3xl">
                        Details
                    </a>
                </div>
            </div>
        </div>
        <div className="border-t border-gray-400 mx-24 py-12 px-6">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h3 className="font-serif text-gray-500 font-bold text-2xl">
                        Additional Services
                    </h3>
                </div>
                <div className="text-right">
                    <a href="#" className="border custom-border-blue bg-transparent custom-text-blue px-5 py-2 rounded-3xl">
                        Details
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services