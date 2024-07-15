import { Options } from '@/app/editor/types/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import React from 'react'
import { CiAlignCenterH, CiAlignLeft, CiAlignRight } from 'react-icons/ci'

export default function ImageOptions({ actions, selected } : Options) {
 if (selected) return (
    <div className=' '>
        <div>
        <h1 className=' text-sm font-semibold mb-2'>Alignment</h1>
            <div className=' flex  gap-4'>
                <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'start'})}} 
                variant={'outline'} className={` ${selected.props.align === 'start' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <CiAlignLeft className=' h-5 w-5'/>
                </Button>
                <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'center'})}} 
                variant={'outline'} className={` ${selected.props.align === 'center' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <CiAlignCenterH className=' h-5 w-5' />
                </Button>
                <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'end'})}} 
                variant={'outline'} className={` ${selected.props.align === 'end' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <CiAlignRight className=' h-5 w-5'/>
                </Button>
            </div>
        </div>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Image Source</h1>
            <Input onChange={()=>{}} className=' file:text-zinc-400 file:text-xs bg-zinc-900 text-white placeholder:text-white text-xs' type='file'/>
            
            <Input disabled value={selected.props.src} className=' bg-zinc-900 my-3' 
            onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.src = e.target.value})}}
            onPaste={(e)=>{actions.setProp(selected.id, (props)=>{props.src = selected.props.src + e.clipboardData })}}
            />
        </div>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Size</h1>
            <Slider className=' my-3 ' value={[selected.props.height]}  step={10} max={500} min={100} onValueChange={(e)=>{
                actions.setProp(selected.id, (props)=>{props.height = e[0]; props.width = e[0] })
                }} />            
            <div className=' flex gap-6'>
                <div>
                    <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Height</h1>
                    <Input type='number' className=' bg-zinc-900' value={selected.props.height} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.height = e.target.value})}}/>
                </div>
                <div>
                    <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Width</h1>
                    <Input type='number' className=' bg-zinc-900' value={selected.props.width} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.width = e.target.value})}}/>
                </div>
            </div>
        </div>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Margin</h1>
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
    </div>
  )
}
