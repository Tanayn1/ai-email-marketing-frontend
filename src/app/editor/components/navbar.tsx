import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex w-full bg-zinc-900 h-[70px]'>
        <div className=' flex items-center gap-1 text-lg font-semibold m-4'>
            <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={30} height={30}/>
            <h1 className=' '>MailSpark</h1>
        </div>
    </div>
  )
}
 