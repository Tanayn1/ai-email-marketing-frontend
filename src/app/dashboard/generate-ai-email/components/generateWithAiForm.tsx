'use client'
import Select, { SelectOption } from '@/components/select'
import React, { useEffect, useState } from 'react'
import { Brand, Product } from '../../../../../types/types'
import { fetchBrands } from '../../brands/actions';
import { fetchProductsByBrandId } from '../../actions';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { WandSparkles } from 'lucide-react';
import { generateEmail } from '../actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function GenerateWithAiForm() {
    const [selectedBrand, setSelectedBrand] = useState<null | string>(null);
    const [brands, setBrands] = useState<null | Array<{name: string, value: string}>>(null);
    const [products, setProducts] = useState<null | Array<SelectOption>>(null);
    const [selectedProduct, setSelectedProduct] = useState<null | string>(null);
    const [emailDescription, setEmailDescription] = useState<null | string>(null);
    const [designStyle, setDesignStyle] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter();

    const handleSubmit = async ()=>{
        if (selectedBrand && selectedProduct && emailDescription && designStyle) {
            setLoading(true)
            const session = await generateEmail(selectedBrand, selectedProduct, emailDescription, designStyle)
            if (session?.id) {
                router.push(`/editor?session=${session.id}`)

            } else {
                toast.error(`Internal Server Error`)
                setLoading(false)
            }

        } else {
            toast.error('Please fill out all specific fields')
        }
    }

    const fetchData = async ()=>{
        const data : Array<Brand> = await fetchBrands()
        const array : Array<{name: string, value: string}> = [];
        data.forEach((brand)=>{
            array.push({name: brand.brand_name, value: brand.id})
        })
        setBrands(array)
    }

    const fetchP = async ()=>{
        if (selectedBrand){
            const data : Array<Product> = await fetchProductsByBrandId(selectedBrand)
            const array: Array<SelectOption> = [];
            data.forEach((product)=>{
                array.push({name: product.product_name, value: product.id})
            })
            setProducts(array)
        }
    }
    useEffect(()=>{
        fetchData()
    },[]);

    useEffect(()=>{
        fetchP()
    },[selectedBrand])
  return (
    <div className=' glass-container w-[500px] h-[350px] mt-5 rounded-xl'>
        <div className=' flex flex-col items-center justify-center'>
            <div className=' m-3 flex gap-10'>
                <div>
                    <h1 className=' text-xs mb-1'>Select Brand</h1>
                    <Select className='w-[200px]' options={brands} placeholder='Select brand' setValue={(value : SelectOption)=>{setSelectedBrand(value.value as string)}}/>

                </div>
                <div>
                    <h1 className=' text-xs mb-1'>Select Product</h1>
                    <Select className='w-[200px]' options={products} placeholder='Select product' setValue={(value : SelectOption)=>{setSelectedProduct(value.value as string)}}/>
                </div>
            </div>
            <div className=' w-[440px] mt-3'>
                <h1 className=' text-xs mb-1'>Describe Your Email</h1>
                <Textarea onChange={(e)=>{setEmailDescription(e.target.value)}} placeholder='e.g An email campaign to sell soccer shoes...' className=' bg-zinc-700'/>
                <div className=' mt-3'>
                    <h1 className=' text-xs mb-1'>Email Design Style</h1>
                    <Input onChange={(e)=>{setDesignStyle(e.target.value)}} placeholder='e.g Salesy' className=' bg-zinc-700'/>
                </div>
                <Button onClick={()=>{handleSubmit()}} disabled={loading} className=' w-full mt-5 text-xs h-8'>
                    Generate <WandSparkles className=' w-3 h-3 ml-2'/>
                </Button>
            </div>

        </div>
    </div>
  )
}
