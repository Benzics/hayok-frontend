import React from 'react'

const Faq = () => {
  return (
    <section className="mt-5 px-24">
        <h1 className="font-bold font-serif text-center text-4xl mx-24 py-40">
            Frequently Asked Questions
        </h1>
        <ul className="font-serif">
            <li className="custom-bg-darkblue rounded-2xl py-12 px-24 mb-4">
                <h3 className="font-bold text-white text-2xl mb-4">What is Heflema Accreditation?</h3>
                <p className="text-gray-400">
                At HEFLEMA, we offer a comprehensive range of services designed to support
                healthcare organizations in achieving excellence in patient care and organizational 
                performance. Explore our services below to learn how we can assist you.
                </p>
            </li>
            <li className="bg-gray-50 px-24 py-12 mb-2 transition hover:text-white hover:custom-bg-darkblue rounded-2xl hover-p">
                <h3 className="font-bold text-2xl mb-4">What is Heflema Accreditation?</h3>
                <p className="text-gray-400 hidden child">
                At HEFLEMA, we offer a comprehensive range of services designed to support
                healthcare organizations in achieving excellence in patient care and organizational 
                performance. Explore our services below to learn how we can assist you.
                </p>
            </li>
            <li className="bg-gray-50 px-24 py-12 mb-2 transition hover:text-white hover:custom-bg-darkblue rounded-2xl hover-p">
                <h3 className="font-bold text-2xl mb-4">What is Heflema Accreditation?</h3>
                <p className="text-gray-400 hidden child">
                At HEFLEMA, we offer a comprehensive range of services designed to support
                healthcare organizations in achieving excellence in patient care and organizational 
                performance. Explore our services below to learn how we can assist you.
                </p>
            </li>
        </ul>
        
    </section>
  )
}

export default Faq