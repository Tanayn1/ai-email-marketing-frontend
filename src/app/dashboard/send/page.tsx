'use client'
import React, { useEffect, useState } from 'react'
import { fetchKeys } from './actions'
import { ESPKey } from '../../../../types/types'
import { Loader2 } from 'lucide-react'
import AddApiKeyForm from './components/addApiKeyForm'
import ApiKeys from './components/apikeys'

export default function Page() {
    const [keys, setKeys] = useState<null | ESPKey[]>(null)
    const fetchData = async ()=>{
        const data = await fetchKeys()
        if (Array.isArray(data)) {
            setKeys(data)
        }
    } 
    useEffect(()=>{
        fetchData()
    }, [])
    if (keys) {
        return (
            <div className=' flex justify-center items-center h-screen '>
                { keys.length === 0 ? <AddApiKeyForm refresh={(value: ESPKey)=>{setKeys([...keys, value])}}/> : <ApiKeys keys={keys}/> }     
            </div>
        )
    } else {
        return (
            <div className=' flex justify-center h-screen items-center'>
                <Loader2 className=' animate-spin h-10 w-10'/>
            </div>
        )
    }
}
