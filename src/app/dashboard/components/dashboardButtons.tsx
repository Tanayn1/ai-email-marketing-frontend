'use client'

import React, { useState } from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { RiAiGenerate } from 'react-icons/ri'
import ManualCreationModal from './manualCreationModal'

export default function DashboardButtons() {
    const [modalShow, setModalShow] = useState<boolean>(false)
  return (
    <div className=' flex gap-7 mt-10'>
        <div className=' transition-opacity duration-300 rounded-xl bg-gradient-to-bl from-lime-400 to-green-500 cursor-pointer hover:opacity-50  h-[150px] w-[250px] '>
          <div className='flex flex-col items-center  m-10'>
            <RiAiGenerate className=' h-10 w-10'/>
            <h1 className=' text-xl font-semibold text-center'>Generate With AI</h1>
          </div>
        </div>
        <div onClick={()=>{setModalShow(true)}} className=' transition-opacity duration-300 rounded-xl bg-gradient-to-tr from-green-300 to-lime-400 cursor-pointer hover:opacity-50  h-[150px] w-[250px] '>
          <div className='flex flex-col items-center  m-10'>
            <HiPencilAlt className=' h-10 w-10'/>
            <h1 className=' text-xl font-semibold text-center'>Manual Creation</h1>
          </div>
        </div>
        <ManualCreationModal isShow={modalShow} setShow={(value: boolean)=>{setModalShow(value)}}/>
      </div>
  )
}
