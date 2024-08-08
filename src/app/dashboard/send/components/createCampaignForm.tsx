'use client'
import React, { useEffect, useState } from 'react'
import { EditorSession } from '../../../../../types/types';
import { fetchEditSessions } from '../../actions';
import Image from 'next/image';
import { Input } from '@/components/ui/input';

export default function CreateCampaignForm() {
    const [selectedEmail, setSelectedEmail] = useState<null | string>(null);
    const [sessions, setSessions] = useState<null | Array<EditorSession>>(null);

    const fetchData = async () => {
        const data: Array<EditorSession> = await fetchEditSessions();
        setSessions(data);
      }
    
      useEffect(()=>{
        fetchData()
      }, []);
  if (selectedEmail === null) {
    return (
    <div>
        <h1 className=' text-xl font-semibold mb-4'>Projects</h1>
        <div className=' grid grid-cols-4 gap-3'>
        {sessions?.map((session, index)=>{
        return (
          <div key={index} className=' bg-zinc-900 flex flex-col items-center rounded-xl  hover:bg-opacity-40 cursor-pointer' 
          onClick={()=>{setSelectedEmail(session.id)}}>
            <div className=' m-8'>
              <div className=' h-[200px] w-[200px] overflow-hidden'>
                <Image src={session.preview_image_src ?? ''} alt='' height={200} width={200}/>
              </div>
              <h1 className=' font-semibold'>{session.session_name}</h1>
              <h1 className=' text-[9px] text-zinc-300'>Last Saved: {session.email_saves[session.email_saves.length - 1]?.updated_at ? session.email_saves[session.email_saves.length - 1]?.updated_at : ''}</h1>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  ) 
} else {
    return (
        <div>
            <h1 className=' flex gap-3 items-center text-4xl font-bold bg-gradient-to-b from-zinc-300 to-lime-400 bg-clip-text text-transparent '>
              Set Up Your Campaign Here
            </h1>
          <div className=' glass-container mt-4 rounded-xl  h-[400px]'>
            <div className=' m-5 flex flex-col gap-3'>
              <div>
                <h1 className=' font-semibold text-xs mb-2'>Campaign Name</h1>
                <Input placeholder='Campaign Name'/>
              </div>
              <div>
                <h1 className=' font-semibold text-xs mb-2'>Email Subject</h1>
                <Input placeholder='Email Subject'/>
              </div>
              <div className=' flex gap-3 w-full'>
                <div>
                  <h1 className=' font-semibold text-xs mb-2'>From Name</h1>
                  <Input placeholder='From Name'/>
                </div>
                <div>
                  <h1 className=' font-semibold text-xs mb-2 '>From Email</h1>
                  <Input placeholder='From Email '/>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
}
