import React, { useState } from 'react'
import stopwatchIcon from '../assets/images/stopwatch1.png'
import checkIcon from '../assets/images/check-circle.png'

const plans = {
  monthly: [
    { title: 'Basic Package', price: 25, period: 'Per month, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
    { title: 'Mid Package', price: 55, period: 'Per month, bill annually', features: ['Unlimited Gym Access', '4x Fitness Consultant', 'Nutrition Tracking', '3x Free Supplement', '5 Days per week', 'Personal Trainer'], highlight: true },
    { title: 'Pro Package', price: 75, period: 'Per month, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
    { title: 'Athlete Package', price: 105, period: 'Per month, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
  ],
  yearly: [
    { title: 'Basic Package', price: 200, period: 'Per year, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
    { title: 'Mid Package', price: 500, period: 'Per year, bill annually', features: ['Unlimited Gym Access', '4x Fitness Consultant', 'Nutrition Tracking', '3x Free Supplement', '5 Days per week', 'Personal Trainer'], highlight: true },
    { title: 'Pro Package', price: 700, period: 'Per year, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
    { title: 'Athlete Package', price: 999, period: 'Per year, bill annually', features: ['Unlimited Gym Access', '2x Fitness Consultant', 'Nutrition Tracking', '1x Free Supplement', '3 Days per week', 'Personal Trainer'], highlight: false },
  ],
}

const Pricing = () => {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="bg-[#0d0d0d] py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col items-center mb-4">
          <img src={stopwatchIcon} alt="icon" className="w-6 h-6 sm:w-7 sm:h-7 object-contain mb-4 sm:mb-5" />
          <span className="text-white text-xs sm:text-sm font-semibold tracking-widest uppercase">Pricing</span>
        </div>

        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8">
          Our List Of Packages
        </h2>

        <div className="flex items-center justify-center mb-10 sm:mb-14 lg:mb-20">
          <div className="flex bg-white rounded-md overflow-hidden p-1.5 sm:p-2 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors duration-200 border-none cursor-pointer rounded-md ${
                billing === 'monthly' ? 'bg-[#9c1c16] text-white' : 'bg-transparent text-[#9c1c16] hover:bg-gray-100'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-colors duration-200 border-none cursor-pointer rounded-md ${
                billing === 'yearly' ? 'bg-[#9c1c16] text-white' : 'bg-transparent text-[#9c1c16] hover:bg-gray-100'
              }`}
            >
              Billed Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans[billing].map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-xl p-5 sm:p-6 flex flex-col gap-4 overflow-hidden ${
                plan.highlight ? 'bg-[#9c1c16]' : 'bg-[#1a1a1a]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-5 right-[-28px] bg-white text-[#711717] text-xs font-bold px-10 py-1 rotate-45">
                  Best Offer
                </div>
              )}
              <h3 className={`text-base sm:text-lg font-bold ${plan.highlight ? 'text-white' : 'text-[#9e1f1f]'}`}>
                {plan.title}
              </h3>
              <div>
                <span className="text-white text-3xl sm:text-4xl font-bold">${plan.price}</span>
                <p className="text-gray-300 text-xs mt-1">{plan.period}</p>
              </div>
              <ul className="flex flex-col gap-3 mt-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <img src={checkIcon} alt="check" className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0" />
                    <span className="text-gray-200 text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`mt-4 w-full py-3 rounded-md text-sm font-semibold border-none cursor-pointer transition-colors duration-300 ${
                plan.highlight ? 'bg-[#0d0d0d] hover:bg-[#1a1a1a] text-white' : 'bg-[#9c1c16] hover:bg-[#c9332a] text-white'
              }`}>
                Register Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Pricing
