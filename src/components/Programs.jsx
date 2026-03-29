import React from 'react'
import cardioIcon from '../assets/images/cardio-icon.png'
import fatLoseIcon from '../assets/images/fat-lose-icon.png'
import proteinIcon from '../assets/images/protein-icon.png'

const programs = [
  {
    id: 1,
    title: 'Cardio Strength',
    description: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years.',
    icon: cardioIcon,
    alt: 'Cardio Strength icon',
    isActive: true,
  },
  {
    id: 2,
    title: 'Fat-Lose',
    description: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years.',
    icon: fatLoseIcon,
    alt: 'Fat-Lose icon',
    isActive: false,
  },
  {
    id: 3,
    title: 'Protein',
    description: 'Lorem Ipsum as their default model text, and a search for "lorem ipsum" will uncover many web sites still in their infancy. Various versions have evolved over the years.',
    icon: proteinIcon,
    alt: 'Protein icon',
    isActive: false,
  },
]

const Programs = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#0a0a0a] px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className={`rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 ${
                program.isActive
                  ? 'bg-[#a2231d]'
                  : 'bg-[#111111] hover:bg-[#1a1a1a]'
              }`}
            >
              <div className="flex justify-center mb-5 sm:mb-6">
                <img src={program.icon} alt={program.alt} className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
              </div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                {program.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
