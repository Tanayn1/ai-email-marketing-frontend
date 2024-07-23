import { useNode } from '@craftjs/core';
import Image from 'next/image';
import React from 'react'
import { Text } from './text';

interface Socials {
    src1: string,
    src2: string,
    src3: string
    src1Text: string,
    src2Text: string,
    src3Text: string,
    italic: boolean,
    fontWeight: number,
    textColor: string,
    fontFamily: string,
    fontSize: number,
    align: 'center' | 'end' | 'start',
    flex: 'row' | 'column',
    marginT: number,
    marginB: number, 
    marginl: number,
    marginR: number,
    link1: string, 
    link2: string,
    link3: string,
}

export default function Socials({ src1, src2, src3, src1Text, src2Text, src3Text,  fontSize, 
    italic, fontWeight, textColor, fontFamily, flex, align, marginT, marginB, marginl, marginR, link1, link2, link3  } : Socials) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div   ref={ref => {connect(drag(ref!))}} 
    style={{display: 'flex', flexDirection: flex, justifyContent: align, alignItems: align,        
    marginTop: `${marginT}px`,
    marginBottom: `${marginB}px`,
    marginRight: `${marginR}px`,
    marginLeft: `${marginl}px`,  }}
    className={` flex justify-center  rounded py-4 gap-4 ${hasSelectedNode ? ` outline outline-black` : ''}`}>
        <a href={link1} key={src1Text} className=' flex'>
            <Image src={src1} alt='social 1' width={20} height={20}/>
            <h1 key={textColor} style={{
                    fontSize: `${fontSize}px`, 
                    background: textColor, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    fontFamily: fontFamily, 
                    whiteSpace: 'pre-wrap', // Ensures that the text wraps
                    wordWrap: 'break-word', // Ensures that long words break to the next line
                    overflow: 'hidden', // Prevents overflowing content
                    textOverflow: 'ellipsis', // Adds ellipsis (...) for overflowing text
                    maxWidth: '100%', // Ensures the element does not exceed the container width
                }}>{src1Text}</h1>
        </a>
        <a href={link2} key={src1Text} className=' flex'>
            <Image src={src2} alt='social 2' width={20} height={20}/>
            <h1 key={textColor}  style={{
                    fontSize: `${fontSize}px`, 
                    background: textColor, 
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    fontFamily: fontFamily, 
                    whiteSpace: 'pre-wrap', // Ensures that the text wraps
                    wordWrap: 'break-word', // Ensures that long words break to the next line
                    overflow: 'hidden', // Prevents overflowing content
                    textOverflow: 'ellipsis', // Adds ellipsis (...) for overflowing text
                    maxWidth: '100%', // Ensures the element does not exceed the container width
                }}>{src2Text}</h1>
        </a>
        <a href={link3} key={src1Text} className=' flex'>
            <Image src={src3} alt='social 3' width={20} height={20}/>
            <h1 key={textColor}  style={{
                    fontSize: `${fontSize}px`, 
                    background: textColor,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    fontFamily: fontFamily, 
                    whiteSpace: 'pre-wrap', // Ensures that the text wraps
                    wordWrap: 'break-word', // Ensures that long words break to the next line
                    overflow: 'hidden', // Prevents overflowing content
                    textOverflow: 'ellipsis', // Adds ellipsis (...) for overflowing text
                    maxWidth: '100%', // Ensures the element does not exceed the container width
                }}>{src3Text}</h1>
        </a>
    </div>
  )
}
