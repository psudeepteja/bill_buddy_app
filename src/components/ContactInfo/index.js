import React from 'react'

export default function ContactInfo() {
  return (
    <div className='grid grid-cols-2 justify-center px-32 py-16 gap-4 bg-[#fff]'>
      <div className='grid justify-center gap-4'>
        <h5 className='text-4xl'>Start using <span className='text-[#F59C1E]'>BillBuddy</span>  today</h5>
        <p>Unlock the Power of Seamless Invoicing with BillBuddy - Your All-in-One Solution for Effortless Billing and Business Growth! Join Thousands of Satisfied Users Today and Elevate Your Business to New Heights!</p>
        <div className='relative'>
          <input type='text' placeholder='Enter Mobile Number' className='px-2 py-4 w-full bg-[#F5F6F8] rounded-lg' />
          <button className='rounded-lg px-[24px] py-[10px] bg-mixedColor text-[#fff] absolute right-[6px] top-[6px] flex gap-1 items-center'><span>Start Today </span><span><img src='/Arrow_Right_LG.svg' alt='image' className='w-[16px] h-[16px]' /></span> </button>
        </div>
        <img src='/Frame 1.png' alt='img' />
      </div>
      <div>
        <img src='/image 8.png' alt='img' />
      </div>
    </div>
  )
}
