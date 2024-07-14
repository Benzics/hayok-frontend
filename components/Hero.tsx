import React from 'react'
import HeroActionButtons from './ui/HeroActionButtons'
import HeroVideoButtons from './ui/HeroVideoButtons'

const Hero = () => {
  return (
    <section className="relative bg-white text-center px-28 py-10">
        <h1 className="font-serif text-[#272c3e] text-5xl py-4 tracking-[-2px]"
            style={{wordSpacing: '-8px'}}>
            <span className="text-[#3799db]">Empowering</span> Healthcare Providers for Quality Assurance
        </h1>
        <p className="text-gray-500 py-5 px-48">
        Lorem ipsum dolor sit amet . The graphic and typographic operators know this well, in reality all the
        professions dealing with the universe of communication have a stable relationship with these words, but what is it?
        </p>
        <HeroActionButtons />
        <HeroVideoButtons />
    </section>
  )
}

export default Hero