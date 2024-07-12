'use client'
import Image from 'next/image'
import React from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { actions, query, enabled } = useEditor((state)=>({
    enabled: state.options.enabled
  }))
  return (
    <div className='flex justify-between w-full fixed top-0 bg-zinc-900 h-[70px]'>
        <div className=' flex items-center gap-1 text-lg font-semibold m-4'>
            <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={30} height={30}/>
            <h1 className=' '>MailSpark</h1>
        </div>
        <div className=' m-4'>
          <Button onClick={()=>{console.log(query.serialize())}}>
            Serialize
          </Button>
        </div>
    </div>
  )
}
 