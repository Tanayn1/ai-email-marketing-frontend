'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { createEspApiKey } from '../actions';

interface AddApiKeyForm {
    refresh: Function
}

export default function AddApiKeyForm({ refresh } : AddApiKeyForm) {
    const [label, setLabel] = useState<null | string>(null);
    const [apiKey, setApiKey] = useState<null | string>(null);

    const handleSubmit = async ()=>{
        if (label && apiKey) {
            const key = await createEspApiKey(label, apiKey);
            if (key) {
                refresh(key)
            }
        }
    }

  return (
    <div className=' w-[500px]  rounded-xl glass-container'>
        <div className=' m-3'>
            <h1 className=' text-xl font-semibold '>Klavyio Intergration</h1>
            <h1 className=' text-xs text-zinc-300 mt-2'>Add your api keys to set up campaigns in Mail Spark</h1>
        </div>
        <div className=' m-6'>
            <div>
                <h1 className=' text-xs font-semibold mb-1'>Label</h1>
                <Input onChange={(e)=>{setLabel(e.target.value)}}/>
            </div>
            <div className='mt-4'>
                <h1 className=' text-xs font-semibold mb-1'>Api Key</h1>
                <Input onChange={(e)=>{setApiKey(e.target.value)}}/>
            </div>
            <Button className=' w-full mt-3' onClick={handleSubmit}>Continue</Button>
        </div>
    </div>
  )
}
