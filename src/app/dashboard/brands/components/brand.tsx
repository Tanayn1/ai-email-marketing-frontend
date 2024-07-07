'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { fetchBrandById } from '../actions';
import { ShoppingCart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Brand() {
    const [brandName, setBrandName] = useState<null | string>(null)

    const searchParams = useSearchParams()
    const brandId = searchParams.get('id');
    const fetchData = async ()=>{
      if (brandId) {
        const response = await fetchBrandById(brandId);
        setBrandName(response.brand_name)
        
      }
    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>
      <div className=''>
        <div className=' glass-container h-[600px] mr-20 rounded-xl'>
          <div className='p-5 '>
            <h1 className=' text-2xl font-semibold'>{brandName}</h1>
            <Tabs defaultValue="products" className="w-[400px] mt-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger className='' value="products">Products</TabsTrigger>
              <TabsTrigger value="logos">Logos</TabsTrigger>
              <TabsTrigger value="fonts & colors">Fonts & Colors</TabsTrigger>
            </TabsList>
            <TabsContent value='products'>
            <div>hekl</div>
            </TabsContent>
            <TabsContent value='logos'>
              <div>sdfs</div>
            </TabsContent>
            <TabsContent value='fonts & colors'>
              <div>fds</div>
            </TabsContent>
            </Tabs>
          </div>

         
        </div>
      </div>
    </div>
  )
}
