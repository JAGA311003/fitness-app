import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Welcome from './components/Welcome'
import Programs from './components/Programs'
import Subscribe from './components/Subscribe'
import Pricing from './components/Pricing'
import BMICalculator from './components/BMICal'
import Trainers from './components/Trainers'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0d0d0d] w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Welcome />
      <Programs />
      <Subscribe />
      <Pricing />
      <BMICalculator />
      <Trainers />
      <Footer />
    </div>
  )
}

export default App
