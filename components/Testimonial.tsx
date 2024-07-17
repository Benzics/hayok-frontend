import React from 'react'

const Testimonial = () => {
  return (
    <section>
        <h1 className="font-bold font-serif text-center text-4xl mx-24 py-40">
            Don&apos;t Just Take Our Words For It!
        </h1>
        <div className="">
            <div className="grid grid-cols-12 gap-8 font-serif">
                <div className="col-span-3 "></div>
                <div className="col-span-6">
                    <div className="bg-white rounded-lg shadow-2xl shadow-blue-100 p-6">
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full mr-4"
                                src="./profile.jpg"
                                alt="Lois Paul"
                            />
                            <div>
                            <p className="text-lg font-bold custom-text-blue">Lois Paul</p>
                            <p className="text-gray-600">Founder of Lois Hospital</p>
                        </div>
                        </div>
                        <p className="text-gray-600">
                            As a relatively new wellness center, we were initially apprehensive about the accreditation process.
                            However, HEFLEMA&apos;s approach was incredibly supportive. The apps&apos;s pre-assessment tools helped us gauge
                            our readiness, and the clear communication channels fostered a sense of trust throughout the journey. 
                            Achieving HEFLEMA Accreditation has boosted our credibility within the community and given our clients 
                            the confidence that we prioritize quality care.
                        </p>
                    </div>
                </div>
               

                <div className="col-span-3"></div>
                
            </div>
        </div>
    </section>
  )
}

export default Testimonial