import React from 'react'

export default function Mainpage() {
  return (
    <section className='flex'>

      <div className='flex flex-col gap-4 justify-end'>
          <button className='overflow-hidden border rounded-full border-bg-secondary bg-sm-bg-secondary sm:p-4 lg:p-5 z-0 hover:scale-110 hover:border-black hover:bg-black hover:text-white duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
          <button className='overflow-hidden border rounded-full border-bg-secondary bg-sm-bg-secondary sm:p-4 lg:p-5 z-0 hover:scale-110 hover:border-black hover:bg-black hover:text-white duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
          <button className='overflow-hidden border rounded-full border-bg-secondary bg-sm-bg-secondary sm:p-4 lg:p-5 z-0 hover:scale-110 hover:border-black hover:bg-black hover:text-white duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
          <button className='overflow-hidden border rounded-full border-bg-secondary bg-sm-bg-secondary sm:p-4 lg:p-5 z-0 hover:scale-110 hover:border-black hover:bg-black hover:text-white duration-200'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>
      </div>

      <div>
        {/* background */}
        <div className='flex justify-center lg:align-center items-end sm:h-[91.3vh] lg:h-[93.2vh]'>
          <img src={'/Image/char.png'} className="z-0 lg:w-[700px] lg:h-[1100px]"/>
        </div>
        {/* background */}

        {/* ornamen */}
        <div>

        </div>
      </div>

    </section>
  )
}
