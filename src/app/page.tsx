import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Gallery from "@/components/Gallery"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  )
}
