import React from 'react'
import { Brand } from '../../../../../types/types'
import { PencilIcon, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FontsColors {
    brand: Brand
}

export default function FontsColors({ brand } : FontsColors) {
  return (
    <div>
        <div>
            <div>
                <h1 className=' font-semibold text-xl mt-4'>
                    Fonts
                </h1>
            </div>
            <div className=' mt-4'>
                <h1>Name</h1>
                <div className=' w-[500px] h-1 rounded-lg bg-zinc-300 mt-1' ></div>
                <div className=' flex w-[500px]  justify-between items-center my-3'>
                    <h1 className=' text-sm'>{brand.fonts.primaryFont}</h1>
                    <div className=' flex gap-x-3 items-center'>
                        <div className=' flex justify-center items-center ml-3 w-[70px] h-[25px] rounded-xl bg-lime-400 bg-opacity-30'>
                            <h1 className=' text-xs text-center text-lime-400 font-semibold'>Header</h1>
                        </div>
                        <Button variant={'outline'} className={`  hover:bg-white hover:text-black bg-zinc-800 text-zinc-400 shadow  border-zinc-700   `}>
                            <Trash2 className=' h-5 w-5'/>
                        </Button>
                        <Button variant={'outline'} className={`  hover:bg-white hover:text-black bg-zinc-800 text-zinc-400 shadow  border-zinc-700   `}>
                            <PencilIcon/>
                        </Button>
                    </div>
                </div>
                <div className=' w-[500px] h-[1px] rounded-lg bg-zinc-300 '></div>
                <div className=' flex w-[500px]  justify-between items-center my-3'>
                    <h1 className=' text-sm'>{brand.fonts.secondaryFont}</h1>
                    <div className=' flex gap-x-3 items-center'>
                        <div className=' flex justify-center items-center ml-3 w-[80px] h-[25px] rounded-xl bg-zinc-950 bg-opacity-30'>
                            <h1 className=' text-xs text-center text-zinc-300 font-semibold'>Body</h1>
                        </div>
                        <Button variant={'outline'} className={`  hover:bg-white hover:text-black bg-zinc-800 text-zinc-400 shadow  border-zinc-700   `}>
                            <Trash2 className=' h-5 w-5'/>
                        </Button>
                        <Button variant={'outline'} className={`  hover:bg-white hover:text-black bg-zinc-800 text-zinc-400 shadow  border-zinc-700   `}>
                            <PencilIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h1 className=' font-semibold text-xl mt-4'>Colors</h1>
                <div className=' mt-1'>
                    <div className=' flex flex-col items-center h-[200px] w-[200px] rounded-xl border border-zinc-700'>
                        <div style={{background: brand.colors.colors.primaryColor}} className={` mt-3 rounded-full w-[100px] h-[100px] border border-zinc-700 `}>
                        </div>
                        <h1 className=' text-sm my-3'>{brand.colors.colors.primaryColor}</h1>
                        <Button variant={'outline'} className={`  hover:bg-white hover:text-black bg-zinc-800 text-zinc-400 shadow  border-zinc-700   `}>
                            <PencilIcon/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
