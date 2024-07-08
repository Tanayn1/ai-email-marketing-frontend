import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { VscLoading } from 'react-icons/vsc';
import { createProduct } from '../actions';
import { toast } from 'sonner';

interface AddProductModal {
    isShow: boolean,
    setShow: Function,
    brandId: string,
    setFinishedScraping: Function
}

export default function AddProductModal({ isShow, setShow, brandId, setFinishedScraping } : AddProductModal) {
    const [loading, setLoading] = useState<boolean>(false);
    const [prodUrl, setProdUrl] = useState<null | string>(null)

    const handleSubmit = async () => {
        if (prodUrl) {
        setLoading(true)
        const response = await createProduct(brandId, prodUrl)
        if (response) {
            setFinishedScraping(false)
        } else {
            toast.error('There was an error proccessing this request')
            setLoading(false)
        }
        } else {
            toast.error('Please fill out all required fields')
        }
    }

 if (isShow) { 
    return (
        <div className=' fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-10'>
            <div className=' flex flex-col bg-zinc-900 rounded-2xl relative w-[500px]'>
                <Button className=' absolute top-3 right-3 text-xs z-10 w-6 h-6' onClick={()=>{setShow(false)}}>X</Button>
                <div className=' m-10'>
                    <h1 className='  text-xl font-semibold'>Enter Your Product Url</h1>
                    <p className=' text-xs text-gray-300 mb-5'>Enter your website link and we will automatically gather your product information.</p>
                    <div className=' mt-4'>
                        <div>
                            <h1 className=' text-sm mb-2'>Product Url</h1>
                            <Input onChange={(e)=>{setProdUrl(e.target.value)}} value={prodUrl ? prodUrl : ''} disabled={loading} placeholder='https://www.nike.com/in/t/pegasus-41-blueprint-road-running-shoes-9ln3lK/HF0013-900'/>
                            <Button onClick={handleSubmit} disabled={loading} className=' my-4  text-xs w-full '>
                                { loading ? <VscLoading className=' animate-spin'/> : 'Continue'}
                            </Button>
                            <div className=' flex flex-col items-center'>
                                <p className=' text-xs text-gray-300 text-center'>or</p>
                                <Button variant={'link'} className=' text-xs'>Manual Creation</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
}
