'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { signUp } from '../actions';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import AuthInput from './auth-input';
import { Button } from '@/components/ui/button';

export default function Signup() {
    const [isDisable, setIsDisable] = useState<boolean>(true);
    const [name, setName] = useState<null | string>(null)
    const [email, setEmail] = useState<null | string>(null);
    const [password, setPassword] = useState<null | string>(null);
    const [confrimPassword, setConfirmPassword] = useState<null | string>(null);
    const router = useRouter();

    useEffect(()=>{
        if (name && email && password && confrimPassword) {
            setIsDisable(false)
        } else {
            setIsDisable(true)
        }
    },[email, password, confrimPassword])
    const handleSubmit = async ()=>{
        if (password === confrimPassword) {
        try {
          const response = await signUp(name!, email!, password!);
          if (response?.redirect) {
            router.push(response.redirect)
          } else if (response?.error) {
            toast.error(response.error)
          }
        } catch (error) {
            console.log(error)
        }
    } else {
        toast.error('Passwords Must Match')
    }
    } 
  return (
    <div className=' border border-zinc-700 rounded-xl '>
      <div className=' m-8'>
        <h1 className=' text-2xl font-semibold'>Sign Up</h1>
        <p className=' text-xs text-gray-500 mb-3 mt-1'>Sign up to continue to Mail Spark AI</p>
        <div className=' flex flex-col gap-3'>
          <AuthInput type='' placeholder='Name' name='Name' onChange={((e)=>{setName(e.target.value)})}/>
          <AuthInput type='email' placeholder='Email' name='Email' onChange={((e)=>{setEmail(e.target.value)})}/>
          <AuthInput type='password' placeholder='Password' name='Password' onChange={((e)=>{setPassword(e.target.value)})}/>
          <AuthInput type='password' placeholder='Confirm Password' name='Confirm Password' onChange={((e)=>{setConfirmPassword(e.target.value)})}/>
        </div>
        <Button disabled={isDisable} onClick={handleSubmit} className=' w-full mt-3'>Continue</Button>
        <div className=' flex items-center mt-1 gap-3'>
          <p className=' text-xs text-gray-400'>already have an account?</p>
          <a href="/auth/signin" className=' text-xs  text-lime-300'>Sign In</a>
        </div>
      </div>
    </div>
  )
}
