'use client'
import Header from "./components/Header"
import Start from "./_components/Start"
import About from "./_components/About"
import Clients from "./_components/Clients"
import Slider from "./_components/Slider"
import Slider2 from "./_components/Slider2"
import Animation from "./_components/Animation"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main>
      <Header />
      <Start />
      <About />
      <Clients />
      <Slider />
      <Slider2 />
      <Animation />
      <Footer />
    </main>
  )
}
