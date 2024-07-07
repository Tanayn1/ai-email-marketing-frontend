'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { logIn } from '../actions';
import { toast } from 'sonner';
import AuthInput from './auth-input';
import { Button } from '@/components/ui/button';

export default function SignIn() {
    const [isDisable, setIsDisable] = useState<boolean>(true);
    const [email, setEmail] = useState<null | string>(null);
    const [password, setPassword] = useState<null | string>(null);
    const router = useRouter()

    useEffect(()=>{
        if (email && password) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    },[email, password]);

    const handleSubmit = async ()=>{
        try {
           const response = await logIn(email!, password!) 
           if (response?.redirect) {
            router.push(response.redirect)
           } else if (response?.error) {
            toast.error(response.error)
          }
        } catch (error) {
            toast.error(`Internal Server Error`)
        }
    }    
  return (
    <div>
      <div className=' border border-zinc-700 rounded-xl'>
        <div className=' m-8 my-11'>
          <h1 className=' text-2xl font-semibold'>Sign In</h1>
          <p className=' text-xs text-gray-500 mb-3 mt-1'>Sign in to continue to Mail Spark AI</p>
          <div className=' flex flex-col gap-3'>
            <AuthInput type='email' placeholder='Email' name='Email' onChange={((e)=>{setEmail(e.target.value)})}/>
            <AuthInput type='password' placeholder='Password' name='Password' onChange={((e)=>{setPassword(e.target.value)})}/>
          </div>
          <Button disabled={isDisable} onClick={handleSubmit} className=' w-full mt-3'>Continue</Button>
          <div className=' flex items-center mt-1 gap-3'>
            <p className=' text-xs text-gray-400'>already have an account?</p>
            <a href="/auth/signup" className=' text-xs  text-lime-300'>Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
