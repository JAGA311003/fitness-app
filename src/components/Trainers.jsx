import React from 'react'
import stopwatchIcon from '../assets/images/stopwatch.png'
import trainer1 from '../assets/images/trainer1.png'
import trainer2 from '../assets/images/trainer2.png'
import trainer3 from '../assets/images/trainer3.png'
import trainer4 from '../assets/images/trainer4.png'
import trainer5 from '../assets/images/trainer5.png'
import facebookIcon from '../assets/images/facebook-icon.png'
import instagramIcon from '../assets/images/instagram-icon.png'
import githubIcon from '../assets/images/github-icon.png'

const trainers = [
  { id: 1, name: 'Brooklyn Simmons', role: 'Fitness Trainer', image: trainer1, showInfo: true },
  { id: 2, name: 'Trainer Two', role: 'Fitness Trainer', image: trainer2, showInfo: false },
  { id: 3, name: 'Trainer Three', role: 'Fitness Trainer', image: trainer3, showInfo: false },
  { id: 4, name: 'Trainer Four', role: 'Fitness Trainer', image: trainer4, showInfo: false },
  { id: 5, name: 'Trainer Five', role: 'Fitness Trainer', image: trainer5, showInfo: false },
]

const Trainers = () => {
  return (
    <section className="bg-[#0d0d0d] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col items-center mb-4">
          <img src={stopwatchIcon} alt="icon" className="w-6 h-6 object-contain mb-2" />
          <span className="text-white text-xs sm:text-sm font-normal tracking-widest uppercase">
            Testimonial
          </span>
        </div>

        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Meet Our Trainers
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:hidden">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="relative rounded-xl overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[200px] sm:h-[260px] object-cover object-top"
              />
              {trainer.showInfo && (
                <>
                  <div className="absolute top-3 right-2 flex flex-col gap-2 z-20">
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={facebookIcon} alt="Facebook" className="w-4 h-4 object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={instagramIcon} alt="Instagram" className="w-4 h-4 object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={githubIcon} alt="Github" className="w-4 h-4 object-contain" />
                    </a>
                  </div>
                  <div className="absolute bottom-3 left-2 right-2 z-20">
                    <div className="bg-black bg-opacity-50 backdrop-blur-sm border-l-4 border-[#e6a817] rounded-l-xl px-3 py-2">
                      <h4 className="text-white font-bold text-xs">{trainer.name}</h4>
                      <p className="text-[#e6a817] text-xs mt-0.5">{trainer.role}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex gap-3 items-start w-full">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className={`relative rounded-xl overflow-hidden flex-shrink-0 ${
                trainer.showInfo ? 'flex-[1.6]' : 'flex-[1]'
              }`}
            >
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-[380px] object-cover object-top"
              />
              {trainer.showInfo && (
                <>
                  <div className="absolute top-7 right-3 flex flex-col gap-4 z-20">
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                    </a>
                    <a href="#" className="flex items-center justify-center hover:opacity-80 transition-opacity">
                      <img src={githubIcon} alt="Github" className="w-5 h-5 object-contain" />
                    </a>
                  </div>
                  <div className="absolute bottom-12 left-6 right-6 z-20">
                    <div className="bg-black bg-opacity-40 backdrop-blur-sm border-l-4 border-[#e6a817] rounded-l-2xl px-4 py-3">
                      <h4 className="text-white font-bold text-sm">{trainer.name}</h4>
                      <p className="text-[#e6a817] text-xs mt-1">{trainer.role}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Trainers