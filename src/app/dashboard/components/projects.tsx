'use client'
import React, { useEffect, useState } from 'react'
import { EditorSession } from '../../../../types/types'
import { fetchEditSessions } from '../actions'
import { useRouter } from 'next/navigation';

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
    <div className=' grid grid-cols-5'>
      {sessions?.map((session, index)=>{
        return (
          <div key={index} className='' onClick={()=>{route(session)}}>
            <h1>{session.session_name}</h1>
          </div>
        )
      })}
    </div>
  )
}
