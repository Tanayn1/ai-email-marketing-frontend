'use client'
import Image from 'next/image'
import React from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';
import lz from "lzutf8";
import { saveEmail } from '../actions';
import { toast } from 'sonner';

export default function Navbar() {
  const { actions, query, enabled } = useEditor((state)=>({
    enabled: state.options.enabled
  }))

  const handleSave = async ()=>{
    actions.selectNode(null!)
    const json = query.serialize()
    const encodedJson = lz.encodeBase64(lz.compress(json));
    await saveEmail(encodedJson)
    toast.success('Email Saved')
  }

  return (
    <div className='flex justify-between w-full fixed top-0 bg-zinc-900 h-[70px]'>
        <div className=' flex items-center gap-1 text-lg font-semibold m-4'>
            <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={30} height={30}/>
            <h1 className=' '>MailSpark</h1>
        </div>
        <div className=' m-4'>
          <Button disabled={false} className=' text-xs h-[25px] px-7' onClick={()=>{handleSave()}}>
            Save
          </Button>
        </div>
    </div>
  )
}
 