'use client'
import React from 'react'
import { ESPKey } from '../../../../../types/types'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


interface ApiKeys {
    keys: ESPKey[]
}

export default function ApiKeys({ keys } : ApiKeys) {
  const router = useRouter()
  return (
    <div>
          <h1 className=' text-center mb-7'>Select An Account</h1>
        <div className=' glass-container rounded-xl '>
          <ScrollArea className=' h-[300px]'>
          <div className=' m-5'>
            {keys.map((key, index)=>{
              return (
                <DropdownMenu>
                <DropdownMenuTrigger className=''>
                  <div onClick={()=>{}} key={index} className=' bg-zinc-800 rounded-lg hover:bg-opacity-40 cursor-pointer '>
                    <div className=' p-4'>
                      <h1 className=' text-sm font-semibold '>Label: {key.label}</h1>
                      <h1 className=' text-xs text-zinc-300'>Created At: {key.created_at}</h1>
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuItem onClick={()=>{router.push(`/dashboard/send/createCampaign?id=${key.id}`)}}>Create Campaign</DropdownMenuItem>
                  <DropdownMenuItem onClick={()=>{router.push(`/dashboard/send/createTemplate?id=${key.id}`)}}>Create Template</DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
              )
            })}
          </div>
          </ScrollArea>
        </div>
    </div>
  )
}
