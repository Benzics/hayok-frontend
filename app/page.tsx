import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Story from "@/components/Story";
import Testimonial from "@/components/Testimonial";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Banner />
    <Story />
    <Services />
    <WhyUs />
    <Testimonial />
    <Faq />
    </>
  );
}
