import { useNode } from '@craftjs/core';
import React from 'react'

interface DraggableButton {
    text: string,
    backgroundColor: string,
    textColor: string
    paddingT: number,
    paddingB: number, 
    paddingl: number,
    paddingR: number,
    fontWeight: number,
    fontSize: number,
    borderRadius: number,
    marginT: number,
    marginB: number, 
    marginl: number,
    marginR: number,
    align: 'center' | 'start' | 'end',
    link: string | undefined,
    fontFamily: string
}

export default function DraggableButton({ text, backgroundColor, textColor, 
  paddingT, paddingB, paddingR, paddingl, fontWeight, fontSize, borderRadius, 
  marginT, marginB, marginl, marginR, align, link, fontFamily } : DraggableButton) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div className={`flex`} ref={ref => {connect(drag(ref!))}}
    style={{display: 'flex', justifyContent: align}}
    >
        <a href={link} target="_blank"
         
        style={{background: backgroundColor, color: textColor,   
        paddingTop: `${paddingT}px`,
        paddingBottom: `${paddingB}px`,
        paddingRight: `${paddingR}px`,
        paddingLeft: `${paddingl}px`,
        fontWeight: fontWeight,
        fontSize: `${fontSize}px`,
        borderRadius: `${borderRadius}px`,
        marginTop: `${marginT}px`,
        marginBottom: `${marginB}px`,
        marginRight: `${marginR}px`,
        marginLeft: `${marginl}px`,
        fontFamily: fontFamily,
        outline: hasSelectedNode ? '2px solid black' : 'none'}}>{text}</a>
    </div>
  )
}
