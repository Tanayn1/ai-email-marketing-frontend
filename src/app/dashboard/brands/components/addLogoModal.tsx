import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { addLogoToLogos } from '../actions'
import { FaLess } from 'react-icons/fa'

interface AddLogoModal {
    isShow: boolean,
    setShow: Function,
    brandId: string,
    addImage: Function
}

export default function AddLogoModal({ isShow, setShow, brandId, addImage } : AddLogoModal) {
    const [loading, setLoading] = useState<boolean>(false)
    const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>)=>{
        const formData = new FormData
        setLoading(true)
        if (e.target.files) {
            formData.append('file', e.target.files[0]);
            const response = await addLogoToLogos(formData, brandId)
            if (response.error) {
                toast.error(response.error)
                setLoading(false)
            } else {
                addImage(response)
                setShow(false)
            }
        } else {
            toast.error('Please upload an image')
            setLoading(false)
        }
    }

 if (isShow) return (
    <div className=' fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-10'>
        <div className=' flex flex-col bg-zinc-900 rounded-2xl relative w-[500px]'>
            <Button className=' absolute top-3 right-3 text-xs z-10 w-6 h-6' disabled={loading} onClick={()=>{setShow(false)}}>
                X
            </Button>
            <div className=' m-10'>
                <h1 className='  text-xl font-semibold'>Add Logo</h1>
                <div className=' mt-4'>
                    <h1 className=' text-xs mb-2'>Upload File Here</h1>
                    <Input disabled={loading} onChange={(e)=>{handleUploadImage(e)}} className=' file:text-zinc-400 file:text-xs  text-white placeholder:text-white text-xs' type='file'/>
                </div>
            </div>
        </div>
    </div>
  )
}
