'use client'
import { Loader, Loader2Icon, XIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Product } from '../../../../../types/types'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import ImageCarousel from './imageCarousel'
import { fetchProductById, updateProduct } from '../actions'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'


interface SideEditProduct {
    isShow: boolean,
    setIsShow: Function,
    selectedProduct: string
}
//figma clone must use for editor lfg
//https://www.youtube.com/watch?v=oKIThIihv60
export default function SideEditProduct( { isShow, setIsShow, selectedProduct } : SideEditProduct ) {
    const [description, setDescription] = useState<null | string>('');
    const [title, setTitle] = useState<null | string>('');
    const [price, setPrice] = useState<null | string>('');
    const [images, setImages] = useState<Array<string>>([]);
    const [saveLoading, setSaveLoading] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async ()=>{
        setLoading(true)
        const prod : Product = await fetchProductById(selectedProduct)
        setDescription(prod.description)
        setTitle(prod.product_name)
        setPrice(prod.price)
        setImages(prod.images)
        setLoading(false)
        
    }

    const handleRemoveImage = (index : number)=>{
        const array = [...images];
        array.splice(index, 1);
        setImages(array)
    }

    const handleSave = async () => {
        if (price && title && images && description) {
            setSaveLoading(true)
            await updateProduct(selectedProduct, price, title, images, description);
            toast.success('Save Succesful')
            setIsShow(false)
            setSaveLoading(false)
        }
        
    }

    useEffect(()=>{
        fetchData();
    },[setIsShow])

    return (
    <div>
        {isShow && (<div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-10"></div>)}
        <aside className={`fixed  inset-y-0 right-0 transform ${isShow ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-zinc-900  shadow-2xl rounded-l-lg  w-[500px] z-10`}>
           <div className=' relative h-5/6 overflow-auto'>
                <div className=' flex justify-between items-center '>
                    <div className=' m-7'>
                    <h1 className='  text-lg font-semibold'>Product</h1>
                    <p className=' text-xs text-gray-300'>id: {selectedProduct}</p>
                    </div>

                    <button className=' m-7' onClick={()=>{setIsShow(false)}}><XIcon/></button>
                </div>
                { loading === false ? 
                <div className=' flex flex-col gap-5 mx-10'>
                    <div>
                        <h1 className=' text-sm mb-1 font-medium'>Product Title</h1>
                        <Input disabled={saveLoading} value={title ? title : ''} onChange={(e)=>{setTitle(e.target.value)}} 
                        onPaste={(e)=>{e.preventDefault(); setTitle(title + e.clipboardData.getData('text'))}}/>
                    </div>
                    <div>
                        <h1 className=' text-sm mb-1 font-medium'>Product Description</h1>
                        <Textarea disabled={saveLoading}  value={description ? description : ''} onChange={(e)=>{setDescription(e.target.value)}} 
                        onPaste={(e)=>{e.preventDefault(); setDescription(description + e.clipboardData.getData('text'))}} />
                    </div>
                    <div>
                        <h1 className=' text-sm mb-1 font-medium'>Price</h1>
                        <Input disabled={saveLoading}  className=' w-[80px]' value={price ?? '$'} onChange={(e)=>{setPrice(e.target.value)}} 
                        onPaste={(e)=>{e.preventDefault(); setPrice(price + e.clipboardData.getData('text'))}}  />
                    </div>
                    <h1 className=' text-md mb-5 font-medium'>Images</h1>
                    <div className=' flex flex-col items-center'>
                        <ImageCarousel handleDelete={(index : number)=>{handleRemoveImage(index)}} images={images}/>
                    </div>
                    <div className=' flex justify-between items-center'>
                        <Button disabled={saveLoading}   variant={'outline'} className=' h-[28px] text-xs bg-zinc-800 hover:bg-lime-400'>Cancel</Button>
                        <Button disabled={saveLoading} onClick={handleSave}  className=' h-[28px] text-xs'>{ saveLoading ? <Loader2Icon className=' animate-spin'/> : 'Save'}</Button>
                    </div>
                </div> : <div></div>
                }
           </div> 
           
        </aside>
    </div>
)

}
