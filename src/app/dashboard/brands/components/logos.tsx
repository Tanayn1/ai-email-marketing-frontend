import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import AddLogoModal from './addLogoModal'
import DeleteLogoModal from './deleteLogoModal'
import { Brand } from '../../../../../types/types'
import { updateBrands } from '../actions'

interface Logos {
  logos: string[]
  brandId: string,
  brand: Brand
}

export default function Logos({ logos, brandId, brand } : Logos) {
  const [isShow, setShow] = useState<boolean>(false);
  const [isDeleteModalShow , setDeleteModalShow] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<null | number>(null)
  const [arrayOfLogos, setArrayOfLogos] = useState<string[]>([]);
  useEffect(()=>{setArrayOfLogos(logos)},[]);

  const handleDelete = async (index: number)=>{
    const array = arrayOfLogos;
    array.splice(index, 1);
    setArrayOfLogos(array);
    await updateBrands(brand.id, brand.brand_name, brand.colors, brand.fonts, brand.logos);
    //delete from db
  }
  return (
    <div>
      <div className=' flex items-center justify-between'>
        <h1 className=' text-lg font-md mt-3'>Logos</h1>
        <Button onClick={()=>{setShow(true)}} className=' text-xs h-7' >Add Logo<PlusIcon className=' h-5 w-5'/></Button>
      </div>
      <div className=' grid grid-cols-5 mt-3 overflow-auto h-[400px]'>
        <div onClick={()=>{setShow(true)}} className=' bg-zinc-700 flex justify-center items-center rounded-xl h-[200px] w-[200px] cursor-pointer hover:opacity-30'>
          <PlusIcon className=' w-16 h-16'/>
        </div>
        {arrayOfLogos.map((logo, index)=>{
          return (
            <div onClick={()=>{setSelectedImage(index); setDeleteModalShow(true)}} className=' bg-zinc-700 border cursor-pointer hover:opacity-30 border-zinc-500  rounded-xl h-[200px] w-[200px]' key={index}>
              <Image src={logo} alt={`logo ${index}`} width={200} height={200}/>
            </div>
          )
        })}
      </div>
      <DeleteLogoModal deleteImage={(index : number)=>{handleDelete(index)}} isShow={isDeleteModalShow} imageIndex={selectedImage!} setShow={(value: boolean)=>{setDeleteModalShow(value)}}/>
      <AddLogoModal addImage={(url: string)=>{setArrayOfLogos([...arrayOfLogos, url])}} isShow={isShow} setShow={(value: boolean)=>{setShow(value)}} brandId={brandId}/>
    </div>
  )
}
