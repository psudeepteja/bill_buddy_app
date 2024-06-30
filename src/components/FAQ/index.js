import React from 'react'
import { constants } from '@/constants'
import { billingSoftware } from '@/constants/data'
import Avatar from '../Avatar'

export default function Faq() {
  return (
    <div className='flex flex-col   px-32 py-16 gap-8'>
      <div className='text-center'>
        <h4 className='text-4xl font-semibold'>Frequently asked <span className='text-[#D3321D]'>questions</span> </h4>
        <p>Everything you need to know about the product and billing.</p>
      </div>
      <div>
        <div className='flex justify-between'>
          <h5 className='text-xl font-medium py-2'>What is billing software?</h5>
          <img src='/Icon wrap 2.svg' />
        </div>
        <p>
          {constants.billingSoftware1}
        </p>
        <p>{constants.billingSoftware2}</p>
        <div className='pt-4 flex flex-col gap-4'>
          {billingSoftware.map((i, idx) => (
            <div key={idx} className='flex justify-between border-t border-[#EAE5FF] pt-4'>
              <p>
                {i}
              </p>
              <div>
                <img src='/Icon wrap.svg' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center py-8 gap-2 bg-[#EAE5FF]'>
        <div><Avatar /></div>
        <span className='font-semibold text-lg'>Still have questions?</span>
        <span>Can’t find the answer you’re looking for? Please chat to our friendly team.</span>
        <button className='px-[18px] py-[10px] bg-mixedColor text-[#fff] rounded-lg'>Get in touch</button>
      </div>
    </div>
  )
}
