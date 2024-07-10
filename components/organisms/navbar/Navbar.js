import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='flex items-center lg:pt-5 sm:pt-5 sm:px-5 sm:justify-between'>
        <form className='relative sm:hidden lg:block'>
            <button className='absolute -left-16 border rounded-full border-black bg-black p-5 z-0 hover:scale-110 duration-200'>
                <Image src={'/Image/search-normal.svg'} width={24} height={24} />
            </button>
            <input className='bg-bg-secondary text-center rounded-full -ml-8 -z-10 lg:h-16 lg:w-[289px]' type={'text'} placeholder={"Task name, status..."}/>
        </form>

        <div>
            <img src={'/Image/brand.svg'} className='sm:w-[40px] sm:h-[35   px] lg:w-[48px] lg:h-[43px]' />
            {/* <Image src={'/Image/brand.svg'} width={48} height={43} /> */}
        </div>

        <div className='flex sm:gap-3 lg:gap-2'>
            <button className='overflow-hidden border rounded-full border-bg-secondary bg-sm-bg-secondary sm:p-4 lg:p-5 z-0 hover:scale-110 hover:border-black hover:bg-black hover:text-white duration-200'>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>


                    {/* <img src={'/Image/notification.svg'} className='sm:w-[20px] sm:h-[20px] lg:w-[24px] lg:h-[24px] color-white' /> */}
                    {/* <Image src={'/Image/notification.svg'} width={24} height={24} /> */}
            </button>
            <div className='flex items-center justify-end border bg-sm-bg-secondary border-bg-secondary rounded-full sm:gap-1  sm:pl-4 lg:gap-[17px] lg:h-[64px] lg:w-[184px] '>
                <p className='font-semibold sm:text-sm sm:mr-[5px] lg:text-base'>Hi, Mr.Lazy </p>
                <img src={'/Image/avatar.png'} className="rounded-full sm:w-[52px] lg:w-[56px]"/>
                {/* <Image src={'/Image/avatar.png'} width={24} height={24} className="rounded-full sm:w-[36px]"/> */}
            </div>
            <div className='flex items-center justify-center border border-bg-secondary rounded-full bg-btn-green sm:hidden lg:gap-[2.5px] lg:h-[64px] lg:w-[120px] lg:py-5 lg:px-[25px] '>
                <Image src={'/Image/category.svg'} width={24} height={24}/>
                <p>Upgrade</p>
            </div>
        </div>
    </nav>
  )
}

