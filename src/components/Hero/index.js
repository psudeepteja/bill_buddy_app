import React from 'react'
import Card from '../Card'
import { PremiumData, basicData, enterpriseData } from '@/constants/data'

export default function Hero() {

  return (
    <div className='flex flex-col px-[160px] py-[80px] gap-12' >
      <div className='text-[36px] font-semibold text-center pt-4 flex'>
        <span><img src='/Group 10.svg' alt='image' className='pt-2' /></span>
        <span> Risk-Free Excellence: Enjoy All Plans with a <span className='text-[#D3321D]'>7-Day Money </span> Back Guarantee. Your Satisfaction, Our Promise.</span>
      </div>
      <div className='grid grid-cols-3 gap-4 z-20'>
        <Card title="Basic" price="189 ₹" text="For Online Users only" data={basicData} color="bg-[#fff]" buttonColor="bg-[#000] text-[#fff]" checkColor="#F59C1E" />
        <Card title="Premium" price="399 ₹" text="Online & Offline Users" data={PremiumData} color="bg-mixedColor text-[#fff]" buttonColor="bg-[#fff] text-[#F59C1E]" checkColor="#fff" />
        <Card title="Enterprise" price="599 ₹" text="Add Multiple Feature With Customization" data={enterpriseData} color="bg-[#fff]" buttonColor="bg-[#000] text-[#fff]" checkColor="#F59C1E" />
      </div>
      <div>
        <div className='relative'><img src='/Group.svg' alt='image' className='absolute left-[-70px] top-[-125px] w-[46px] h-[28px]' /></div>
        <div className='relative'><img src='/Group 9.svg' alt='image' className='absolute  right-[-50px] bottom-[315px] w-[32px] h-[55px]' /></div>
        <div className='relative'><img src='/Group 7.svg' alt='image' className='absolute  right-[-57px] bottom-[0px] w-[109px] h-[126px] z-10 ' /></div>
        <div className='relative'><img src='/Vector.svg' alt='image' className='absolute  right-[0px] bottom-[0px] w-[86px] h-[99px] z-0' /></div>
      </div>
    </div>
  )
}
