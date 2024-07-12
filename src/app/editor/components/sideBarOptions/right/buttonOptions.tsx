import { Options } from '@/app/editor/types'
import { GradientPicker } from '@/components/colorPicker'
import { Input } from '@/components/ui/input'
import React from 'react'



export default function ButtonOptions({ actions, selected } : Options) {
if (selected) return (
    <div className=' m-10'>
      <div className=' mb-4'>
        <h1 className=' text-sm font-semibold mb-2'> Content</h1>
        <Input value={selected.props.text} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.text = e.target.value})}} className=' bg-zinc-900'/>
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
    </div>
  )
}
