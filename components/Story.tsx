import React from 'react'
import TitleBar from './ui/TitleBar'
import ImageStack from './ui/ImageStack'

const Story = () => {
  return (
    <section>
        <TitleBar
            caption="Our story"
            position="right"
            content="HEFLEMA (Healthcare Facilities Excellence & Monitoring Authority)"
        />
        <div className="grid grid-cols-5 px-24 mt-8">
            <div className="relative col-span-2">
                <ImageStack
                    image1="./banner3.jpg"
                    image2="./banner4.jpg"
                    alt1="Our Story"
                    alt2="Our Story"
                />
            </div>
            <div className="col-span-3">
                <p className="text-gray-500 col-span-3 py-6 font-medium font-serif">
                HEFLEMA is a healthcare accreditation organization with a mission to elevate the quality of care provided
                by medical facilities around the world. They achieve this by offering a comprehensive accreditation program that
                assesses healthcare facilities against established standards. By undergoing this rigorous evaluation process,
                facilities can ensure they are delivering the exceptional care that their patients deserve. HEFLEMA&apos;s accreditation 
                serves as a trusted mark of quality, demonstrating a facility&apos;s commitment to patient safety, operational 
                efficiency, and continuous improvement.
                </p>

                <div className="mt-10 px-6">
                    <div className="grid grid-cols-3 font-serif">
                        <div className="text-center">
                            <span className="custom-text-blue font-bold text-4xl block mb-2">120+</span>
                            <span className="text-gray-500">Success rate</span>
                        </div>
                        <div className="text-center">
                            <span className="custom-text-blue font-bold text-4xl block mb-2">120+</span>
                            <span className="text-gray-500">Improved quality matrics</span>
                        </div>
                        <div className="text-center">
                            <span className="custom-text-blue font-bold text-4xl block mb-2">120+</span>
                           <span className="text-gray-500">Number of accredited facilities</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story