import React from 'react'
import GenerateWithAiForm from './components/generateWithAiForm'

export default function Page() {
  return (
    <div className=' flex flex-col justify-center h-screen items-center '>
        <div className=' flex flex-col items-center'>
            <h1 className=' flex gap-3 items-center text-4xl font-bold bg-gradient-to-b from-zinc-300 to-lime-400 bg-clip-text text-transparent '>
                Give Us More Info About Your Product
            </h1>
            <h1 className=' text-xl font-semibold text-zinc-300'>
                Tell our AI more about your product, email style and goal 
            </h1>
        </div>
        <GenerateWithAiForm/>
    </div>
  )
}
