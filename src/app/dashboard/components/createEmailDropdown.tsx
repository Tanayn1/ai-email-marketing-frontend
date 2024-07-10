import { PlusIcon } from 'lucide-react'
import React from 'react'

export default function CreateEmailDropdown() {
  return (
    <div className=' fixed top-0 right-0  '>
        <div className=' transition-colors duration-300 m-5 bg-lime-400 rounded-full cursor-pointer hover:bg-lime-500 '>
            <div className=' flex flex-col items-center  justify-center p-3'>
                <PlusIcon/>
            </div>
        </div>
    </div>
  )
}
