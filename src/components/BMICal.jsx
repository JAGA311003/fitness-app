import React, { useState } from 'react'
import bmiBg from '../assets/images/bmi-bg.png'

const bmiData = [
  { range: '< 18.5', label: 'Underweight' },
  { range: '18.5 - 24.9', label: 'Normal Weight' },
  { range: '25.0 - 29.9', label: 'Overweight' },
  { range: '30.0 - 34.9', label: 'Class I Obesity' },
  { range: '35.0 - 39.9', label: 'Class II Obesity' },
]

const activityOptions = [
  'Sedentary (little or no exercise)',
  'Lightly active (1-3 days/week)',
  'Moderately active (3-5 days/week)',
  'Very active (6-7 days/week)',
  'Super active (twice/day)',
]

const BMICalculator = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [activity, setActivity] = useState('')
  const [result, setResult] = useState(null)

  const calculateBMI = () => {
    if (!weight || !height) return
    const heightInM = parseFloat(height) / 100
    const bmi = (parseFloat(weight) / (heightInM * heightInM)).toFixed(1)
    let category = ''
    if (bmi < 18.5) category = 'Underweight'
    else if (bmi < 25) category = 'Normal Weight'
    else if (bmi < 30) category = 'Overweight'
    else if (bmi < 35) category = 'Class I Obesity'
    else category = 'Class II Obesity'
    setResult({ bmi, category })
  }

  return (
    <section
      className="relative w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bmiBg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-10">

        <div className="w-full lg:flex-1">
          <div className="grid grid-cols-2 bg-[#f4bb36] rounded-t-md">
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-black font-bold text-base sm:text-xl tracking-widest uppercase text-center">
              BMI
            </div>
            <div className="px-4 sm:px-6 py-3 sm:py-4 text-black font-bold text-base sm:text-xl tracking-widest uppercase text-center">
              Classification
            </div>
          </div>
          <div className="flex flex-col">
            {bmiData.map((item, index) => (
              <div
                key={item.range}
                className={`flex items-center border-b border-[#333] ${
                  index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111]'
                }`}
              >
                <span className="text-gray-300 text-xs sm:text-sm py-3 sm:py-4 w-1/2 text-center">{item.range}</span>
                <span className="text-gray-300 text-xs sm:text-sm py-3 sm:py-4 w-1/2 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:flex-1">
          <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            BMI Calculator
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="| Weight/kg"
              className="bg-[#4a4747] text-white placeholder-gray-300 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-md border-none outline-none w-full"
            />
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="| Height/cm"
              className="bg-[#4a4747] text-white placeholder-gray-300 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-md border-none outline-none w-full"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="| Age"
              className="bg-[#4a4747] text-white placeholder-gray-300 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-md border-none outline-none w-full"
            />
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="| Gender"
              className="bg-[#4a4747] text-white placeholder-gray-300 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-md border-none outline-none w-full"
            />
          </div>

          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="w-full bg-[#4a4747] text-gray-300 text-sm px-4 sm:px-5 py-3 sm:py-4 rounded-md border-none outline-none mb-3 sm:mb-4 cursor-pointer"
          >
            <option value="" disabled>| Select an activity factor:</option>
            {activityOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-[#2a2a2a] text-white">{opt}</option>
            ))}
          </select>

          <button
            onClick={calculateBMI}
            className="w-full bg-[#9c1c16] hover:bg-[#c9332a] text-white text-sm sm:text-base py-3 sm:py-4 rounded-md border-none cursor-pointer transition-colors duration-300"
          >
            Calculate Now
          </button>

          {result && (
            <div className="mt-4 sm:mt-6 bg-[#1a1a1a] rounded-md px-4 sm:px-6 py-3 sm:py-4 text-center">
              <p className="text-white text-base sm:text-lg font-bold">
                Your BMI: <span className="text-[#e6a817]">{result.bmi}</span>
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Category: <span className="text-white">{result.category}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BMICalculator
