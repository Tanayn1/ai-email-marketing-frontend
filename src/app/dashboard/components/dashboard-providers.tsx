'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { checkUser } from '../actions';
import { useRouter } from 'next/navigation';

const UserContext : any = createContext(null)

export default function DashboardProviders( { children } : Readonly<{
  children: React.ReactNode
}> ) {
  const router = useRouter()
  const [user, setUser] = useState<null | any>(null)
  const checks = async ()=>{
    const isUser  = await checkUser();
    if (isUser.result === false) {
      router.push('/auth/signin')
      return
    }
    setUser(isUser.user)
  }

  useEffect(()=>{
    checks();
  },[])
  return (
    <UserContext.Provider value={user}>
    <div>
      {children}
    </div>
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
