import React from 'react'

const Banner = () => {
  return (
    <section className="grid grid-cols-2 gap-5 mt-5 h-96">
        <div className="grid grid-cols-7 gap-4">
            <figure className="col-span-4">
                <img src="./banner1.jpg"
                    className="min-h-full w-full rounded-r-3xl"
                    alt="banner"
                />
            </figure>
            <div className="relative col-span-3 grid grid-rows-3">
               
                <div className="absolute w-full bg-[#f4fcff] py-4 pt-8 z-0 rounded-3xl text-center h-[35%]">Streamlined Registration</div>
                <div className="absolute w-full custom-bg-blue py-4 pt-8 text-white text-center z-10 rounded-3xl h-[35%] top-[33%]">Accreditation made easy</div>
                <div className="absolute w-full custom-bg-darkblue py-4 pt-8 text-white text-center z-20 rounded-3xl h-[38%] top-[62%]">Tools for continous improvement</div>
            
            </div>
        </div>
        <div className="grid">
            <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-cols-2 gap-2">
                    <div className="custom-bg-yellow px-6 py-7 h-36 rounded-3xl">
                        <span className="block custom-text-darkblue font-bold font-sans tracking-tighter text-4xl">30<span className="custom-text-blue">+</span></span>
                        <span className="text-white text-xs">Health organizations registered</span>
                    </div>
                    <div className="custom-bg-blue px-6 py-7 h-36 rounded-3xl">
                        <span className="block custom-text-darkblue font-bold font-sans tracking-tighter text-4xl">30</span>
                        <span className="text-white text-xs">Health organizations registered</span>
                    </div>
                    <figure className="col-span-2">
                        <img src="./banner2.jpg"
                                className="min-h-full w-full rounded-3xl"
                                alt="banner"
                            />
                    </figure>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-3">
                    <figure className="col-span-2 row-span-2">
                        <img src="./banner3.jpg"
                                className="min-h-full w-full rounded-l-3xl"
                                alt="banner"
                            />
                    </figure>
                    <figure>
                        <img src="./banner1.jpg"
                                className="min-h-full w-full rounded-3xl"
                                alt="banner"
                            />
                    </figure>
                    <figure>
                        <img src="./banner1.jpg"
                                className="min-h-full w-full rounded-l-3xl"
                                alt="banner"
                            />
                    </figure>
                </div>
                
            </div>
        </div>
           
    </section>
  )
}

export default Banner