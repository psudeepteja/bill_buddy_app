import React from 'react'
import { getInTouch, legalInformation, quickAction, services } from '@/constants/data'

export default function Footer() {
    return (
        <div className='flex flex-col bg-[#090713] text-[#fff] px-[60px] py-[80px] gap-8'>
            <div className='flex gap-20 '>
                <div className='w-2/5 flex flex-col gap-4'>
                    <img src='/Group 8.png' alt='image' className='w-[392px] h-[72px]' />
                    <p> &quot; Tailored for Success: BillBuddy - Crafted with Care for Small & Medium Businesses Across India. Experience Efficiency, Reliability, and Growth Today! &quot;</p>
                    <div className='relative'>
                        <input type='text' placeholder='Enter Mobile Number' className='px-2 py-4 w-full bg-[#F5F6F8] rounded-lg' />
                        <button className='rounded-lg px-[24px] py-[10px] bg-mixedColor text-[#fff] absolute right-[6px] top-[6px] flex gap-1 items-center'><span>Start Today </span><span><img src='/Arrow_Right_LG.svg' alt='image' className='w-[16px] h-[16px]' /></span> </button>
                    </div>
                </div>
                <div className='w-3/5 flex justify-between text-xs'>
                    <div>
                        <h5 className='pb-1'>Quick Action</h5>
                        <div className='border'></div>
                        <div className='pt-2'>
                            {quickAction.map((i, idx) => (
                                <p key={idx} className='py-1'>{i}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className='pb-1'>Legal Information</h5>
                        <div className='border'></div>
                        <div className='pt-2'>
                            {legalInformation.map((i, idx) => (
                                <p key={idx} className='py-1'>{i}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className='pb-1'>Services</h5>
                        <div className='border'></div>
                        <div className='pt-2'>
                            {services.map((i, idx) => (
                                <p key={idx} className='py-1'>{i}</p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h5 className='pb-1'>Get In Touch</h5>
                        <div className='border'></div>
                        <div className='pt-2'>
                            {getInTouch.map((i, idx) => (
                                <p key={idx} className='py-1'>{i}</p>
                            ))}
                        </div>

                        <h5 className='pb-1 pt-4'>Follow Us On</h5>
                        <div className='border'></div>
                        <div className='flex gap-2 pt-2'>
                            <img src='/instagram.svg' alt='image' />
                            <img src='/facebook.svg' alt='image' />
                            <img src='/twitterX.svg' alt='image' />
                            <img src='/linkedIn.svg' alt='image' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border text-[#fff]'></div>
            <div className='flex justify-between'>
                <p>© BillBuddy - Where Innovation Meets Ease. All Rights Reserved.</p>
                <p className='flex items-center gap-2'><span>Powered By</span><img src="/Frame 2.png" alt='image' /></p>
            </div>
        </div>
    )
}
