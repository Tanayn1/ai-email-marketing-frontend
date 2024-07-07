'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { ScrapeAndCreateBrand } from '../actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { VscLoading } from 'react-icons/vsc'

interface CreateNewBrandModal {
    isShow: boolean,
    setIsShow: Function
}

export default function CreateNewBrandModal( {isShow, setIsShow} : CreateNewBrandModal) {
 if  (isShow) {
    const [loading, setLoading] = useState<boolean>(false);
    const [brandName, setBrandName] = useState<null | string>(null);
    const [brandUrl, setBrandUrl] = useState<null | string>(null);
    const router = useRouter();


    const handleSubmit = async () => {
        if (brandName && brandUrl) {
            setLoading(true)
            const redirectUrl = await ScrapeAndCreateBrand(brandName, brandUrl);
            if (redirectUrl?.redirect) {
                router.push(redirectUrl.redirect)

            } else {
                toast.error('There was an error proccesing this request')
                setLoading(false)
            }

        } else {
            toast.error('Please fill out all fields')
        }
    }

    return (
    <div className=' fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-10'>
        <div className='flex flex-col glass-container  rounded-2xl relative w-[500px] '>
            <Button className=' absolute top-3 right-3 text-xs z-10 w-6 h-6' onClick={()=>{setIsShow(false)}}>X</Button>
            <div className=' flex flex-col gap-2 m-10'>
                <h1 className='  text-xl font-semibold'>Enter Your Brand Details</h1>
                <p className=' text-xs text-gray-300 mb-5'>Enter your website link and we will automatically gather your brand information.</p>
                <div >
                    <h1 className=' text-sm mb-2'>Brand Name</h1>
                    <Input disabled={loading} onChange={(e)=>{setBrandName(e.target.value)}} placeholder='Nike'/>
                </div>
                <div>
                    <h1 className='text-sm mb-2'>Brand Url</h1>
                    <Input disabled={loading} onChange={(e)=>{setBrandUrl(e.target.value)}} placeholder='https://www.nike.com'/>
                </div>
                <Button onClick={handleSubmit} className=' w-full mt-4' disabled={loading}>
                    { loading ? <VscLoading className=' animate-spin'/> : 'Continue'}
                </Button>
                <div className=' flex flex-col items-center'>
                    <p className=' text-xs text-gray-300 text-center'>or</p>
                    <Button variant={'link'} className=' text-xs'>Manual Creation</Button>
                </div>
        
            </div>
        </div>
    </div>
  )
} 
}
