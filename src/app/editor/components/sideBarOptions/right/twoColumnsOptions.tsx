import { Options } from '@/app/editor/types/types'
import { GradientPicker } from '@/components/colorPicker'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { LucideAlignHorizontalSpaceAround } from 'lucide-react'
import React from 'react'
import { CgSpaceBetween } from 'react-icons/cg'
import { CiAlignCenterH, CiAlignLeft, CiAlignRight } from 'react-icons/ci'
import { RxSpaceBetweenHorizontally, RxSpaceEvenlyHorizontally } from 'react-icons/rx'

export default function TwoColumnsOptions({ actions, selected, session_id } : Options) {
 if (selected) return (
    <div className=' '>
        <div className=' mt-4' >
            <h1 className=' text-sm font-semibold mb-2'>Alignment</h1>
            <div className=' flex gap-3'>
            <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'space-evenly'})}} 
              variant={'outline'} className={` ${selected.props.align === 'space-evenly' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <RxSpaceEvenlyHorizontally className=' h-5 w-5'/>
              </Button>
              <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'space-between'})}} 
              variant={'outline'} className={` ${selected.props.align === 'space-between' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <RxSpaceBetweenHorizontally className=' h-5 w-5'/>
              </Button>
              <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.align = 'space-around'})}} 
              variant={'outline'} className={` ${selected.props.align === 'space-around' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                <LucideAlignHorizontalSpaceAround  className=' h-5 w-5'/>
              </Button>
            </div>
            <div className=' flex gap-3 mt-3'>
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
          <h1 className=' text-sm font-semibold mb-2'>Background Color</h1>
            <GradientPicker sessionId={session_id!} className=' text-xs ' background={selected.props.backgroundColor} setBackground={(value)=>{actions.setProp(selected.id, (props)=>{props.backgroundColor = value})}}/>
          </div>
          <div className=' mt-4'>
              <h1 className=' text-sm font-semibold mb-2'>Border Radius</h1>
              <Slider value={[selected.props.borderRadius]}  
              onValueChange={(e)=>{actions.setProp(selected.id, (props)=>{props.borderRadius = e[0]})}} max={50} 
              className='' step={1}/>
            </div>
          <div className=' mt-4'>
          <h1 className=' text-sm font-semibold mb-2'>Padding & Margin</h1>
          <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Padding</h1>
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
    </div>
  )
}
