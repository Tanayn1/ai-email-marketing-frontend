import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { WithoutPrivateActions } from '@craftjs/core'
import React from 'react'
import { FaAlignJustify, FaAlignLeft, FaAlignRight, FaItalic } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { MdOutlineFormatBold } from 'react-icons/md'
import { GradientPicker } from '@/components/colorPicker'
import FontsDropdown from './components/fontsDropdown'
import { Options } from '@/app/editor/types/types'
import { ScrollArea } from '@/components/ui/scroll-area'

interface TextOptions {
    actions: WithoutPrivateActions<null>,
    selected: {
        id: any;
        name: string;
        settings: React.ElementType<any, keyof React.JSX.IntrinsicElements>;
        isDeletable: boolean;
        props: Record<string, any>;
    } | undefined
}

export default function TextOptions({ actions, selected, session_id } : Options) {
 if (selected) return (
    <ScrollArea className=' h-[600px]'>
    <div className=''>
      <div className=' mt-3'>
        <h1 className=' text-sm font-semibold mb-2'>Content</h1>
        <Input type='text' value={selected.props.text}  onChange={(e)=>{
        actions.setProp(selected.id, (props)=>{props.text = e.target.value})
        }} className=' bg-zinc-900 text-xs '/>
      </div>

      <div className=' mt-4'>
        <h1 className=' text-sm font-semibold mb-2'>Align</h1>
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
      <h1 className='text-sm font-semibold mt-4 mb-2'>Text Options</h1>
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
            <GradientPicker sessionId={session_id!} background={selected.props.textColor} setBackground={(color)=>{actions.setProp(selected.id, (props)=>{props.textColor = color})}}/>
        </div>
        <div className=' mt-3'>
            <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Font Family</h1>
            <FontsDropdown handleFontChange={(font: string)=>{actions.setProp(selected.id,(props)=>{props.fontFamily = font})}} selectedFont={selected.props.fontFamily}/>
        </div>
        <div className=' mt-4'>
            <h1 className='text-sm font-semibold mt-4 mb-2'>Padding</h1>
            <div className=' border border-zinc-700 rounded-lg'>
                <div className=' flex flex-col items-center m-3'>
                    <input value={selected.props.paddingT} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.paddingT = e.target.value })}} type="number"  inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='T' />
                    <div className=' flex justify-between w-full'>
                    <input value={selected.props.paddingl} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.paddingl = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='L' />
                    <input value={selected.props.paddingR} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.paddingR = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='R' />
                    </div>
                    <input value={selected.props.paddingB} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.paddingB = e.target.value })}} type="number" inputMode='numeric' className=' text-xs placeholder:text-sm w-[30px] focus:outline-none bg-zinc-900 placeholder:text-zinc-500 text-center' placeholder='B' />
                </div>
            </div>
            </div>
            <h1 className=' text-xs font-medium text-zinc-200 mt-3 mb-2'>Margin</h1>
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
  </div>
  </ScrollArea>
  )
}


const FontWeightDropdown = ({ actions, selected } : TextOptions) => {
   if (selected) return (
        <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant={'outline'}  className={` shadow bg-zinc-900 border-zinc-700 text-zinc-400 text-xs flex gap-1 `}>
                <MdOutlineFormatBold />{selected.props.fontWeight}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=' bg-zinc-800 text-white border-zinc-700'>
            <DropdownMenuLabel>Font Weight</DropdownMenuLabel>
            <DropdownMenuSeparator className=' bg-zinc-600' />
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 100})}}>100</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 200})}}>200</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 300})}}>300</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 400})}}>400</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 500})}}>500</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 600})}}>600</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 700})}}>700</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 800})}}>800</DropdownMenuItem>
            <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 900})}}>900</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}