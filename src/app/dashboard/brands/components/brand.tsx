'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { fetchBrandById } from '../actions';
import { ShoppingCart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Products from './products';
import Logos from './logos';
import FontsColors from './fontsColors';
import { Brand as B  } from '../../../../../types/types';

export default function Brand() {
    const [brandName, setBrandName] = useState<null | string>(null)
    const [brand, setBrand] = useState<null | B>(null)

    const searchParams = useSearchParams()
    const brandId = searchParams.get('id');
    const fetchData = async ()=>{
      if (brandId) {
        const response = await fetchBrandById(brandId);
        if (response) {
          setBrandName(response.brand_name);
          setBrand(response);

        } 
        
      }
    }
    useEffect(()=>{
      fetchData()
    },[])
 if (brandId && brand) {return (
    <div className=' '>
      <div className=''>
        <div className=' bg-zinc-800 border border-zinc-700 shadow-2xl ml-5 h-[600px] mr-20 rounded-xl'>
          <div className='p-5 '>
            <h1 className=' text-3xl font-semibold'>{brandName}</h1>
            <Tabs defaultValue="products" className="w-full mt-4">
            <TabsList className="grid w-[400px] grid-cols-3">
              <TabsTrigger className='' value="products">Products</TabsTrigger>
              <TabsTrigger value="logos">Logos</TabsTrigger>
              <TabsTrigger value="fonts & colors">Fonts & Colors</TabsTrigger>
            </TabsList>
            <TabsContent  value='products'>
              <Products brandId={brandId}/>
            </TabsContent>
            <TabsContent value='logos'>
              <Logos logos={brand.logos} brand={brand} brandId={brandId}/>
            </TabsContent>
            <TabsContent value='fonts & colors'>
              <FontsColors brand={brand}/>
            </TabsContent>
            </Tabs>
          </div>

         
        </div>
      </div>
    </div>
  ) }
}
