import { Input } from '@/components/ui/input'
import React, { ChangeEventHandler } from 'react'
 interface AuthInput {
    name: string,
    placeholder: string | undefined,
    onChange: ChangeEventHandler<HTMLInputElement>,
    type: string | undefined
 }
export default function AuthInput( {name, onChange, placeholder, type} : AuthInput ) {
  return (
    <div className=' flex flex-col gap-1'>
        <h1 className=' text-sm'>{name}</h1>
        <Input placeholder={placeholder} onChange={onChange} type={type} />
    </div>
  )
}
