import { Options } from '@/app/editor/types/types'
import { GradientPicker } from '@/components/colorPicker'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Slider } from '@/components/ui/slider'
import { WithoutPrivateActions } from '@craftjs/core'
import React from 'react'
import { CiAlignBottom, CiAlignCenterH, CiAlignCenterV, CiAlignLeft, CiAlignRight, CiAlignTop, CiGrid2H, CiGrid2V } from 'react-icons/ci'
import { MdWidthFull } from 'react-icons/md'

export default function CustomisableContainerOptions({ actions, selected } : Options) {
    const setAlign = (value : 'start' | 'center' | 'end', option : 'x' | 'y')=>{
        if (selected?.props.flexDirection === 'row' && option === 'x') {
            actions.setProp(selected.id, (props)=>{props.alignX = value})
        } else if (selected?.props.flexDirection === 'row' && option === 'y') {
            actions.setProp(selected.id, (props)=>{props.alignY = value})
        } else if (selected?.props.flexDirection === 'column' && option === 'x') {
            actions.setProp(selected.id, (props)=>{props.alignY = value})
        } else {
            actions.setProp(selected!.id, (props)=>{props.alignX = value})
        }
    }

 if (selected) return (
    <ScrollArea className=' h-[500px]'>
    <div>
        <div className=' mt-4'>
            <h1 className=' text-sm font-semibold mb-2'>Alignment</h1>
                <h1 className=' text-xs font-medium text-zinc-200 mb-2'>Direction</h1>
                <div className=' flex gap-3'>
                    <Button variant={'outline'} onClick={()=>{actions.setProp(selected.id, (props)=>{props.flexDirection = 'row'})}}  className={` ${selected.props.flexDirection === 'row' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}><CiGrid2V /></Button>
                    <Button variant={'outline'} onClick={()=>{actions.setProp(selected.id, (props)=>{props.flexDirection = 'column'})}} className={` ${selected.props.flexDirection === 'column' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}><CiGrid2H  /></Button>
                </div>
            <h1 className=' text-xs font-medium text-zinc-200 mb-2 mt-3'>X Axis</h1>
                <div className=' flex gap-3 mt-3'>
                    <Button onClick={()=>{setAlign('start', 'x')}} 
                    variant={'outline'} className={` ${selected.props.alignX === 'start' && selected.props.flexDirection === 'row'  ? 'bg-white text-black' : selected.props.alignY === 'start' && selected.props.flexDirection === 'column' ? 'bg-white text-black'  : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                        <CiAlignLeft className=' h-5 w-5'/>
                    </Button>
                    <Button onClick={()=>{setAlign('center', 'x')}}
                    variant={'outline'} className={` ${selected.props.alignX === 'center' && selected.props.flexDirection === 'row' ? 'bg-white text-black' : selected.props.alignY === 'center' && selected.props.flexDirection === 'column' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                        <CiAlignCenterH className=' h-5 w-5' />
                    </Button>
                    <Button onClick={()=>{setAlign('end', 'x')}} 
                    variant={'outline'} className={` ${selected.props.alignX === 'end' && selected.props.flexDirection === 'row' ? 'bg-white text-black' : selected.props.alignY === 'end' && selected.props.flexDirection === 'column' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                        <CiAlignRight className=' h-5 w-5'/>
                    </Button>
                    </div>
                <h1 className=' text-xs font-medium text-zinc-200 mb-2 mt-3'>Y Axis</h1>
                    <div className=' flex gap-3 mt-3'>
                        <Button onClick={()=>{setAlign('start', 'y')}} 
                        variant={'outline'} className={` ${selected.props.alignY === 'start' && selected.props.flexDirection === 'row'  ? 'bg-white text-black' : selected.props.alignX === 'start' && selected.props.flexDirection === 'column' ? 'bg-white text-black'  : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                            <CiAlignTop className=' h-5 w-5'/>
                        </Button>
                        <Button onClick={()=>{setAlign('center', 'y')}}
                        variant={'outline'} className={` ${selected.props.alignY === 'center' && selected.props.flexDirection === 'row' ? 'bg-white text-black' : selected.props.alignX === 'center' && selected.props.flexDirection === 'column' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                            <CiAlignCenterV className=' h-5 w-5' />
                        </Button>
                        <Button onClick={()=>{setAlign('end', 'y')}} 
                        variant={'outline'} className={` ${selected.props.alignY === 'end' && selected.props.flexDirection === 'row' ? 'bg-white text-black' : selected.props.alignX === 'end' && selected.props.flexDirection === 'column' ? 'bg-white text-black' : ' text-zinc-400 bg-zinc-900'} shadow  border-zinc-700 `}>
                            <CiAlignBottom  className=' h-5 w-5'/>
                        </Button>
                    </div>
        </div>
        <div className=' mt-4'>
        <h1 className=' text-sm font-semibold mb-2'>Background</h1>
        <GradientPicker className=' text-xs ' background={selected.props.backgroundColor} setBackground={(value)=>{actions.setProp(selected.id, (props)=>{props.backgroundColor = value})}}/>

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
                    <div className=' flex gap-1'>
                        <h1 className=' text-xs font-medium text-zinc-200  mb-2'>Width</h1>
                        <Button onClick={()=>{actions.setProp(selected.id, (props)=>{props.width = 700})}} variant={'outline'} className={` h-3 ${selected.props.width === 700 ? 'text-black bg-white' : 'text-zinc-400 bg-zinc-900'}`}>
                            <MdWidthFull className=' h-3 w-3'/>
                        </Button>
                    </div>
                    <Input type='number' max={700} className=' bg-zinc-900' value={selected.props.width} onChange={(e)=>{actions.setProp(selected.id, (props)=>{props.width = e.target.value})}}/>
                </div>
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
    </div>
    </ScrollArea>
  )
}
