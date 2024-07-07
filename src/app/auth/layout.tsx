import Image from 'next/image'
import React from 'react'

export default function Auth_layout( { children } : 
    Readonly<{
        children: React.ReactNode
    }> ) {
  return (
    <div className=' flex justify-center h-screen items-center'>
        <div className=' fixed top-0'>
            <div className=' flex items-center gap-1 text-xl font-semibold mt-2'>
                <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={40} height={40}/>
                <h1>MailSpark</h1>
            </div>
        </div>
        {children}
    </div>
  )
}
