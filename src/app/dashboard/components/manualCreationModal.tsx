import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { Brand, Product } from '../../../../types/types'
import { fetchBrands, fetchProductById } from '../brands/actions';
import { fetchProductsByBrandId } from '../actions';

interface ManualCreationModal {
    isShow: boolean,
    setShow: Function
}

export default function ManualCreationModal({ isShow, setShow } : ManualCreationModal) {
    const [selctedBrand, setSelectedBrand] = useState<null | string>(null);
    const [brands, setBrands] = useState<null | Array<Brand>>(null)
    const [selectedProduct, setSelectedProduct] = useState<null | Product>();
    const [products, setProducts] = useState<null | Array<Product>>(null);
    const [buttonDisable, setButtonDisable] = useState<boolean>(true);
    const [productsDisable, setProductsDisable] = useState<boolean>(true);

    const fetchB = async ()=>{
        const data : Array<Brand> = await fetchBrands()
        setBrands(data)
    }

    const fetchP = async ()=>{
        const data : Array<Product> = await fetchProductsByBrandId();
        setProducts(products)
    }
   
    useEffect(()=>{
        fetchB()
    },[])

    useEffect(()=>{
        if (selctedBrand) {
            setProductsDisable(false)
        }
    },[selctedBrand])

    useEffect(()=>{
        if (selctedBrand && selectedProduct) {
            setButtonDisable(false)
        }
    },[])

    if (isShow) {return (
    <div className=' fixed inset-0 backdrop-blur-lg flex flex-col justify-center items-center z-10'>
        <div className=' flex flex-col bg-zinc-900 rounded-2xl relative w-[500px]'>
            <Button className=' absolute top-3 right-3 text-xs z-10 w-6 h-6' onClick={()=>{setShow(false)}}>X</Button>
            <div className=' m-8'>
                <h1 className='  text-xl font-semibold'>Manual Creation</h1>
                <div className=' m-3'>
                    <h1 className=' font-semibold text-zinc-300'>Select Brand</h1>
                    <select className=' w-full mt-3 bg-zinc-900 border border-zinc-700 rounded-md p-2 px-2 text-xs'name="SelectBrand" onChange={(e)=>{
                        setSelectedBrand(e.target.value)
                    }} id="SelectBrand">
                        <option disabled value="Select">Select Brand</option>
                        {brands?.map((brand)=>{
                            return (
                                <option value={brand.id}>{brand.brand_name}</option>
                            )
                        })}
                    </select>
                    <h1 className=' font-semibold text-zinc-300 mt-4'>Select Product</h1>
                    <select disabled={productsDisable} className=' w-full mt-3 bg-zinc-900 border border-zinc-700 rounded-md p-2 px-2 text-xs'name="SelectBrand" id="SelectBrand">
                        <option disabled value="Select">Select Brand</option>
                    </select>

                    <Button disabled={buttonDisable} className=' w-full mt-3'>Continue to editor</Button>
                    <p className=' text-xs text-zinc-300 text-center my-2'>or</p>
                    <a href="/dashboard/templates" className=' text-xs font-semibold text-lime-400 flex justify-center'>
                        Start from template
                    </a>
                </div>
            </div>
        </div>
    </div>
  )}
}
