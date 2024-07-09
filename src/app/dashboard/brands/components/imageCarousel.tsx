import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import RenderImage from './renderImage'
import { Button } from '@/components/ui/button'
import { IoTrashBin } from 'react-icons/io5'
import { PlusIcon } from 'lucide-react'


interface ImageCarousel {
    images: Array<string> | null,
    handleDelete: Function
}

export default function ImageCarousel({ images, handleDelete } : ImageCarousel) {

  return ( 
    <Carousel className="w-5/6  max-w-sm ">
      <CarouselContent className="-ml-1 items-center">
            <CarouselItem  className=' md:basis-1/2 lg:basis-1/3"'>
                <div className=' hover:cursor-pointer hover:opacity-50 w-[120px] h-[120px] bg-zinc-700 rounded-xl '>
                    <div className=' flex flex-col items-center h-[120px] justify-center'>
                        <PlusIcon/>
                    </div>
                </div>
            </CarouselItem>
        {images?.map((image, index)=>{
            return (
                <CarouselItem key={index} className=' md:basis-1/2 lg:basis-1/3"'>
                    <div className=' relative'>
                        <RenderImage htmlString={image}/>
                        <Button onClick={()=>{handleDelete(index)}} variant={'destructive'} className='absolute top-0 right-0 h-[20px]  rounded-full '><IoTrashBin className='h-[15px] w-[15px]'/></Button>
                    </div>
                </CarouselItem>
            )
        })}
      </CarouselContent>
      <CarouselPrevious className=' bg-zinc-800 hover:bg-lime-400' />
      <CarouselNext className=' bg-zinc-800 hover:bg-lime-400' />
    </Carousel>
  )
}
