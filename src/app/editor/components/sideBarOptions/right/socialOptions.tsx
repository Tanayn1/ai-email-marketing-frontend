import { Options } from '@/app/editor/types/types'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAlignJustify, FaAlignLeft, FaAlignRight, FaItalic } from 'react-icons/fa'
import { FontWeightDropdown } from './components/fontsWeightsDropdown'
import { Input } from '@/components/ui/input'
import { GradientPicker } from '@/components/colorPicker'
import FontsDropdown from './components/fontsDropdown'
import { CgDisplayFlex } from 'react-icons/cg'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'


export default function SocialOptions({ actions, selected }: Options) {
  if (selected) return (
    <div>
        <ScrollArea className=' h-[600px]'>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Alignment</h1>
            <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Mode</h1>
            <div className=' flex gap-2'>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.flex = 'row'})}} 
                        variant={'outline'} className={`${selected.props.flex === 'row' ? ' bg-white text-black' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                        <CgDisplayFlex className=''/>
                    </Button>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.flex = 'column'})}} 
                        variant={'outline'} className={`${selected.props.flex === 'column' ? ' bg-white text-black' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                        <RiBarChartHorizontalFill className=''/>
                    </Button>
                </div>
                <h1 className=' text-xs font-medium text-zinc-200  mb-2 mt-4'>Align</h1>
                <div className=' flex  gap-4'>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'start'})}} 
                    variant={'outline'} className={`${selected.props.align === 'start' ? ' bg-white text-black' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                        <FaAlignLeft className=''/>
                    </Button>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'center'})}} 
                    variant={'outline'} className={`${selected.props.align === 'center' ? ' bg-white text-black' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                        <FaAlignJustify/>
                    </Button>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'end'})}} 
                    variant={'outline'} className={`${selected.props.align === 'end' ? ' bg-white text-black' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                        <FaAlignRight/>
                    </Button>
                </div>
        </div>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Text Options</h1>
                <div className=' flex gap-5 '>
                    <div className=''>
                    <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Italic</h1>
                    <Button onClick={()=>{actions.setProp(selected.id, (props)=>{
                    if (selected.props.italic === true) {
                    props.italic = false
                    } else {
                    props.italic = true
                    }
                    })}} variant={'outline'} className={`${selected.props.italic === true ? 'bg-white text-black ' : 'bg-zinc-900 text-zinc-400'} shadow  border-zinc-700 `}>
                    <FaItalic />
                    </Button>
                    </div>
                    <div>
                    <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Font Weight</h1>
                    <FontWeightDropdown actions={actions} selected={selected}/>
                    </div>
                    <div>
                    <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Font Size</h1>
                    <Input type='number' value={selected.props.fontSize}  onChange={(e)=>{
                    actions.setProp(selected.id, (props)=>{props.fontSize = e.target.value})
                    }} className='w-[60px] bg-zinc-900 text-xs text-zinc-400 h-9 '/>
                    </div>
                    </div>
                    <div className=' mt-3'>
                    <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Text Color</h1>
                    <GradientPicker background={selected.props.textColor} setBackground={(color)=>{actions.setProp(selected.id, (props)=>{props.textColor = color})}}/>
                    </div>
                    <div className=' mt-3'>
                    <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Font Family</h1>
                    <FontsDropdown handleFontChange={(font: string)=>{actions.setProp(selected.id,(props)=>{props.fontFamily = font})}} selectedFont={selected.props.fontFamily}/>
                </div>
                    <h1 className=' text-sm font-semibold mt-4 mb-2'>Margin</h1>
                        <div className=' border border-zinc-700 rounded-lg'>
                            <div className=' flex flex-col items-center m-3'>
                                <input value={selected.props.marginT} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.marginT = e.target.value })}} type="number"  inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='T' />
                                <div className=' flex justify-between w-full'>
                                <input value={selected.props.marginl} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.marginl = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='L' />
                                <input value={selected.props.marginR} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.marginR = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='R' />
                                </div>
                                <input value={selected.props.marginB} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.marginB = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='B' />
                            </div>
                        </div>
                        <h1 className=' text-sm font-semibold mt-4 mb-2'>Socials</h1>
                        <div>
                            <div>
                                <Image src={selected.props.src1} alt='' width={100} height={100}/>
                                <Input className='  bg-zinc-900 text-xs text-zinc-400 h-9' value={selected.props.src1Text} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.src1Text = e.target.value })}}/>
                            </div>
                            <div>
                                <Image src={selected.props.src2} alt='' width={100} height={100}/>
                                <Input className='  bg-zinc-900 text-xs text-zinc-400 h-9' value={selected.props.src2Text} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.src1Text = e.target.value })}}/>
                            </div>                            <div>
                                <Image src={selected.props.src3} alt='' width={100} height={100}/>
                                <Input className='  bg-zinc-900 text-xs text-zinc-400 h-9' value={selected.props.src3Text} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.src1Text = e.target.value })}}/>
                            </div>
                        </div>
        </div>
        </ScrollArea>
    </div>
  )
}
