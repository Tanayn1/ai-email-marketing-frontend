import { Options } from '@/app/editor/types'
import { GradientPicker } from '@/components/colorPicker'
import { Input } from '@/components/ui/input'
import React from 'react'
import FontsDropdown from './components/fontsDropdown'
import { FontWeightDropdown } from './components/fontsWeightsDropdown'
import { Slider } from '@/components/ui/slider'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { CiAlignLeft } from "react-icons/ci";
import { CiAlignCenterH } from "react-icons/ci";
import { CiAlignRight } from "react-icons/ci";

//add fonts tho

export default function ButtonOptions({ actions, selected } : Options) {
if (selected) return (
  <ScrollArea className=' h-[600px] '>
    <div className=' m-10'>
      <div className=' mb-4'>
        <h1 className=' text-sm font-semibold mb-2'> Content</h1>
        <Input value={selected.props.text} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.text = e.target.value})}} className=' bg-zinc-900 text-xs'/>
        <div className=' flex gap-8'>
            <div>
              <h1 className=' text-xs font-medium text-zinc-200 mt-3  mb-2'>Font Size</h1>
              <Input className=' w-[60px] text-xs bg-zinc-900' value={selected.props.fontSize}  onChange={(e)=>{
                actions.setProp(selected.id, (props)=>{props.fontSize = e.target.value})
                }}/>             
            </div>
            <div>
              <h1 className=' text-xs font-medium text-zinc-200 mt-3  mb-2'>Font Weight</h1>
              <FontWeightDropdown actions={actions} selected={selected}/> 
            </div>
        </div>
      </div>
        <h1 className=' text-sm font-semibold mb-2'>Colors</h1>
        <div className=' flex items-center gap-6'>
          <div>
            <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Button Color</h1>
            <GradientPicker className=' text-xs w-[140px]' background={selected.props.backgroundColor} setBackground={(value)=>{actions.setProp(selected.id, (props)=>{props.backgroundColor = value})}}/>
          </div>
          <div>
            <h1 className=' text-xs font-medium text-zinc-200   mb-2'>Text Color</h1>
            <input className=' border-none outline-none' value={selected.props.textColor} type="color" onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.textColor = e.target.value})}} />
          </div>
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
          <div className=' mt-4' >
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
          <h1 className=' text-sm font-semibold mb-2'>Link</h1>
          <Input className=' bg-zinc-900 text-xs' placeholder='https://www.lmaoai.app/' value={selected.props.link} 
            onChange={(e)=>{actions.setProp(selected.id, (props) => {props.link = e.target.value})}}/>
        </div>
    </div>
    </ScrollArea>
  )
}
