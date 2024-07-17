import React from 'react'
import TitleBar from './ui/TitleBar'

const WhyUs = () => {
  return (
    <section>
        <TitleBar
            caption="Why choose us"
            content="Elevate Your Facility, Elevate Patient Care: The Benefits of HEFLEMA Accreditation"
            position="right"
        />
        <div className="px-24 grid grid-cols-4 items-end gap-6 mb-6">
            <div>
                <h2 className="font-bold font-serif text-3xl mb-2">Accreditation made easy</h2>
                <figure className="h-96 overflow-hidden rounded-2xl mb-2">
                    <img
                        className="h-full"
                        src="./banner3.jpg"
                        alt="accreditation"
                    />
                </figure>
                <p className="text-gray-500 mb-5 text-sm">
                    Our clear guidelines, educational resources, and dedicated support make accreditation attainable.
                </p>

                <a href="#" className="custom-bg-darkblue text-white rounded-xl px-6 py-2">learn more</a>
            </div>
            <div>
                <figure className="h-96 overflow-hidden rounded-2xl">
                    <img
                        className="h-full"
                        src="./banner1.jpg"
                        alt="accreditation"
                    />
                </figure>
            </div>
            <div>
                <figure className="h-80 overflow-hidden">
                    <img
                        className="h-full"
                        src="./banner2.jpg"
                        alt="accreditation"
                    />
                </figure>
            </div>
            <div>
                <figure className="h-72 overflow-hidden rounded-2xl">
                    <img
                        className="h-full"
                        src="./banner5.jpg"
                        alt="accreditation"
                    />
                </figure>
            </div>
        </div>
    </section>
  )
}

export default WhyUs