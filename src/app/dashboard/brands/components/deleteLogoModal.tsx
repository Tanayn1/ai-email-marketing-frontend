import { Button } from '@/components/ui/button'
import React from 'react'

interface DeleteLogoModal {
    isShow: boolean,
    setShow: Function,
    imageIndex: number,
    deleteImage: Function
}

export default function DeleteLogoModal({ isShow, setShow, imageIndex, deleteImage } : DeleteLogoModal) {

 if (isShow) return (
    <div className=' fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-10'>
        <div className=' flex flex-col bg-zinc-900 rounded-2xl relative w-[500px]'>
            <Button className=' absolute top-3 right-3 text-xs z-10 w-6 h-6'  onClick={()=>{setShow(false)}}>
                X
            </Button>
            <div className=' m-10'>
                <h1 className='  text-xl font-semibold'>Delete Image</h1>
                <Button className=' w-full mt-4' onClick={()=>{deleteImage(imageIndex); setShow(false)}}>Delete Image</Button>
            </div>
        </div>
    </div>
  )
}
