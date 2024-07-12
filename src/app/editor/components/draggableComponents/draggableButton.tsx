import { useNode } from '@craftjs/core';
import React from 'react'

interface DraggableButton {
    text: string,
    backgroundColor: string,
    textColor: string
}

export default function DraggableButton({ text, backgroundColor, textColor } : DraggableButton) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div className={`flex`} ref={ref => {connect(drag(ref!))}}>
        <button 
        //className={textColor && `text-[${textColor}]`} 
        style={{background: backgroundColor, color: textColor }}>{text}</button>
    </div>
  )
}
