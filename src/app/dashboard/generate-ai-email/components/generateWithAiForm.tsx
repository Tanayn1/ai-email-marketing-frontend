'use client'
import Select, { SelectOption } from '@/components/select'
import React, { useEffect, useState } from 'react'
import { Brand, Product } from '../../../../../types/types'
import { fetchBrands } from '../../brands/actions';
import { fetchProductsByBrandId } from '../../actions';
import { Textarea } from '@/components/ui/textarea';

export default function GenerateWithAiForm() {
    const [selectedBrand, setSelectedBrand] = useState<null | string>(null);
    const [brands, setBrands] = useState<null | Array<{name: string, value: string}>>(null);
    const [products, setProducts] = useState<null | Array<SelectOption>>(null);
    const [selectedProduct, setSelectedProduct] = useState<null | string>(null)
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
    <div className=' glass-container w-[500px] h-[400px] mt-5 rounded-xl'>
        <div className=' flex flex-col items-center justify-center'>
            <div className=' m-3 flex gap-5'>
                <div>
                    <h1 className=' text-xs'>Select Brand</h1>
                    <Select className='w-[200px]' options={brands} placeholder='Select brand' setValue={(value : SelectOption)=>{setSelectedBrand(value.value as string)}}/>

                </div>
                <div>
                    <h1 className=' text-xs'>Select Product</h1>
                    <Select className='w-[200px]' options={products} placeholder='Select product' setValue={(value : SelectOption)=>{setSelectedProduct(value.value as string)}}/>
                </div>
            </div>
            <div className=' w-[470px]'>
                <h1 className=' text-xs'>Describe Your Email</h1>
                <Textarea className=''/>
            </div>
        </div>
    </div>
  )
}
