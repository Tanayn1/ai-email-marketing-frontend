import { useNode } from '@craftjs/core';
import Image from 'next/image';
import React from 'react'
import { IoImageOutline } from 'react-icons/io5';
import { RiPinDistanceFill } from 'react-icons/ri';
import { Rnd } from 'react-rnd';

interface DraggableImage {
    align: 'center' | 'start' | 'end',
    height: number,
    width: number,
    src: string | null,
    marginT: number,
    marginB: number, 
    marginl: number,
    marginR: number,
}

export default function DraggableImage({ align, height, width, src, marginT, marginB, marginR, marginl } : DraggableImage) {
const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    }));
  return (
    <div style={{
    display: 'flex', 
    justifyContent: align}} ref={ref => {connect(drag(ref!))}}>
        
        {
        src ? 
        <img alt='' src={src} width={width} height={height} style={{outline: hasSelectedNode ? '2px solid black' : 'none',        
        marginTop: `${marginT}px`,
        marginBottom: `${marginB}px`,
        marginRight: `${marginR}px`,
        marginLeft: `${marginl}px`}} />
         : 
         <div style={{outline: hasSelectedNode ? '2px solid black' : 'none', width: `${width}px`, height: `${height}px`,         
         marginTop: `${marginT}px`,
         marginBottom: `${marginB}px`,
         marginRight: `${marginR}px`,
         marginLeft: `${marginl}px` }} className=' bg-slate-200 rounded-xl h-full '>
            <div style={{height: `${height}px`, width:`${width}px`, display:'flex', justifyContent:'center' ,alignContent: 'center', alignItems:'center'}} >
                <IoImageOutline className=' text-gray-400 h-16 w-16' />
            </div>
         </div>
        }
    </div>
  )
}
