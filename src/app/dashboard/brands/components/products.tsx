'use client'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../actions';
import AddProductModal from './addProductModal';
import RenderImage from './renderImage';
import { Skeleton } from '@/components/ui/skeleton';
import SideEditProduct from './sideEditProduct';
import { Product } from '../../../../../types/types';

interface Products {
    brandId: string
}

export default function Products({ brandId } : Products) {
    const [products, setProducts] = useState<Array<Product>>([]);
    const [showEditProduct, setShowEditProduct] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<null | string>(null)
    const [show, setShow] = useState<boolean>(false)
    const fetchData= async () => {
        const response = await fetchProducts(brandId);
        setProducts(response)
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className=' '>
        <div className=' flex items-center justify-between '>
            <h1 className=' text-lg font-md mt-3'>Products</h1>
            <Button className=' text-xs h-7' onClick={()=>{setShow(true)}}>Add Product<PlusIcon className=' h-5 w-5'/></Button>
        </div>
        <div className=' grid grid-cols-5 mt-3 overflow-auto h-[400px]'>
            <div onClick={()=>{setShow(true)}} className=' bg-zinc-700 rounded-xl h-[200px] w-[200px] cursor-pointer hover:opacity-30'>
                <div className=' flex flex-col items-center justify-center h-[200px]'>
                    <PlusIcon className=' w-16 h-16'/>
                </div>
            </div>
            {products.map((product)=>{
                return (
                    <div onClick={()=>{setSelectedProduct(product.id);setShowEditProduct(true)}} className=' hover:opacity-50 cursor-pointer bg-zinc-700 rounded-xl h-[200px] w-[200px]'>
                        <div className=' flex justify-center overflow-hidden rounded-t-xl fade-mask-bottom h-[100px] w-[200px]'>
                            { 
                            product.images.length !== 0 ? 
                            <RenderImage htmlString={product.images[0]}/> : <Skeleton className=' w-[200px] h-[200px]'/>
                            }
                        </div>
                        <h1 className=' text-center text-sm font-semibold m-3'>{product.product_name}</h1>
                    </div>
                )
            })}
        </div>
        <AddProductModal setFinishedScraping={(value : boolean)=>{fetchData(); setShow(value)}} brandId={brandId} isShow={show} setShow={(value : boolean) => {setShow(value)}}/>
         { selectedProduct ? <SideEditProduct selectedProduct={selectedProduct!} setIsShow={(value : boolean)=>{setShowEditProduct(value)}} isShow={showEditProduct}/> : ''}
    </div>
  )
}
