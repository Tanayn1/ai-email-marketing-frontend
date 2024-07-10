'use client'
import React from 'react'
import { useUser } from './dashboard-providers'
import { Skeleton } from '@/components/ui/skeleton'

export default function WelcomeBack() {
    const user : any = useUser()
  return (
    <h1 className=' flex gap-3 items-center text-4xl font-bold bg-gradient-to-b from-zinc-300 to-lime-400 bg-clip-text text-transparent '>
        Welcome back! {user !== null ? user.name : <Skeleton className=' w-[100px] h-[30px]'/>}
    </h1>
)
}
