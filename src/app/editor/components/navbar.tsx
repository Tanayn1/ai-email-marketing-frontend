'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';
import lz from "lzutf8";
import { fetchSession, getImage, saveEmail } from '../actions';
import { toast } from 'sonner';
import { EditorSession } from '../../../../types/types';
import { useRouter } from 'next/navigation';
import { Loader2Icon } from 'lucide-react';
import { craftJsonToHtml } from '../lib/codeGen';

interface Navbar {
  session : EditorSession,
}

export default function Navbar({ session} : Navbar) {
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [imageCaptureLoading, setImageCaptureLoading] = useState<boolean>(false)
  const { actions, query, enabled } = useEditor((state)=>({
    enabled: state.options.enabled
  }))


  const captureImage = async ()=>{
    setImageCaptureLoading(true)
    const json = query.serialize()
    const html = craftJsonToHtml(json)
    const base64Image = await getImage(html);
    if (base64Image) {
      // Convert Base64 to Blob
      const byteCharacters = atob(base64Image);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], {type: 'image/png'});

      // Create download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'generated-image.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      setImageCaptureLoading(false)
  }          

  }

  const handleSave = async ()=>{
    setSaveLoading(true)
    actions.selectNode(null!)
    const json = query.serialize()
    const encodedJson = lz.encodeBase64(lz.compress(json));
    const html = craftJsonToHtml(json)
    const updatedEmail = await saveEmail(encodedJson, session!, html)
    if (updatedEmail) {
      toast.success('Email Saved')  
      setSaveLoading(false)
    } else {
      toast.error('There was an error saving this email')
      setSaveLoading(false)
    }
  }
  useEffect(()=>{

  },[])

  const exportHTML = ()=>{
    const json = query.serialize()
    const html = craftJsonToHtml(json)
    console.log(html)
  }

  return (
    <div className='flex items-center justify-between w-full fixed top-0 bg-zinc-900 h-[70px] z-10'>
        <div className=' flex items-center gap-1 text-lg font-semibold m-4'>
            <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={30} height={30}/>
            <h1 className=' '>MailSpark</h1>
        </div>
        <div>{session?.session_name}</div>
        <div className=' mx-4 flex items-center gap-4'>
          <h1 className=' text-[10px] text-zinc-400'>{ session.email_saves.length !== 0 ? 
          `Last Saved: ${session.email_saves[session.email_saves.length - 1].updated_at}`
            : ''}</h1>
          <Button disabled={saveLoading} className=' text-xs h-[25px] px-7' onClick={()=>{handleSave()}}>
            {saveLoading ? <Loader2Icon className=' animate-spin'/> : 'Save'}
          </Button>
          <Button onClick={()=>{captureImage()}}>Image</Button>
          <Button onClick={()=>{console.log(query.serialize())}}>Temporary ting</Button>
        </div>
    </div>
  )
}
 