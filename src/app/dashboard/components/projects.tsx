'use client'
import React, { useEffect, useState } from 'react'
import { EditorSession } from '../../../../types/types'
import { fetchEditSessions } from '../actions'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Projects() {
  const [sessions, setSessions] = useState<null | Array<EditorSession>>(null);
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const fetchData = async () => {
    const data: Array<EditorSession> = await fetchEditSessions();
    setSessions(data);
  }

  const route = (session : EditorSession)=>{
    setLoading(true)
    router.push(`/editor?session=${session.id}`)
  }

  useEffect(()=>{
    fetchData()
  }, []);
  return (
    <div className=' grid grid-cols-5 mt-3'>
      {sessions?.map((session, index)=>{
        return (
          <div key={index} className=' bg-zinc-900 flex flex-col items-center rounded-xl  hover:bg-opacity-40 cursor-pointer' 
          onClick={()=>{route(session)}}>
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
  )
}
