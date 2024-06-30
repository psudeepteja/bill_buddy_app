import React from 'react'

export default function Header() {
    const navList = ["Home", "Features", "Blogs", "Services", "Pricing"]
    
    return (
        <div className='flex justify-between items-center px-[120px] py-[10px] h-[88px] bg-[#fff]'>
            <div className='flex gap-2 items-center h-[40px]'>
                <img src='/Bill Buddy.png' className='w-[40px] h-[40px]' />
                <img src='/Group 4.png' className='w-[169px] h-[36px]' />
            </div>
            <div className='flex gap-6 font-semibold'>
                {navList.map((i, idx) => (
                    <div key={idx} className={`${i === "Pricing" && 'text-[#115CC9]'}`}>{i}</div>
                ))
                }
            </div>
            <div className='flex gap-4' >
                <button className='bg-[#fff] border border-[#115CC9] px-6 py-[10px] rounded-lg'>Let’s Deal</button>
                <button className='bg-[#115CC9] border px-6 py-[10px] rounded-lg text-[#fff]'>Login To Account</button>
            </div>
        </div>
    )
}
