import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Story from "@/components/Story";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Banner />
    <Story />
    <Services />
    <WhyUs />
    </>
  );
}
