import { Options } from '@/app/editor/types/types'
import { GradientPicker } from '@/components/colorPicker'
import React from 'react'

export default function CanvasContainerOptions({ actions, selected } : Options) {
 if (selected) return (
    <div className=' '>
        <div>
            <h1 className=' text-sm font-semibold mb-2'>Background Color</h1>
            <GradientPicker className=' text-xs ' background={selected.props.backgroundColor} setBackground={(value)=>{actions.setProp(selected.id, (props)=>{props.backgroundColor = value})}}/>
        </div>
    </div>
  )
}
