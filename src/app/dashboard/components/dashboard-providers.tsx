'use client'
import React, { useEffect } from 'react'
import { checkUser } from '../actions';
import { useRouter } from 'next/navigation';

export default function DashboardProviders( { children } : Readonly<{
  children: React.ReactNode
}> ) {
  const router = useRouter()
  const checks = async ()=>{
    const isUser  = await checkUser();
    if (isUser === false) {
      router.push('/auth/signin')
    }
  }

  useEffect(()=>{
    checks();
  },[])
  return (
    <div>
      {children}
    </div>
  )
}
