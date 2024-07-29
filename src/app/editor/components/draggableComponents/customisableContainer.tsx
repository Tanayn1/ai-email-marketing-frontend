import { useNode } from '@craftjs/core';
import React from 'react'

interface CanvasContainer {
    children?: any,
    backgroundColor: string,
    width: number,
    height: number,
    flexDirection: 'row' | 'column'
    alignX: 'start' | 'center' | 'end'
    alignY: 'start' | 'center' | 'end'
    borderRadius: number,
    marginT: number,
    marginB: number, 
    marginl: number,
    marginR: number,
    paddingT: number,
    paddingB: number, 
    paddingl: number,
    paddingR: number,
}

export default function CustomisableContainer({ children, backgroundColor, width, height, flexDirection, 
    alignX, alignY, paddingT, paddingB, paddingR, paddingl, marginT, marginB, marginl, marginR, borderRadius } : CanvasContainer) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));

  return (
    <div className=' flex justify-center break-words'>
    <div ref={ref => {connect(drag(ref!))}} style={{
        background: backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        flexDirection: flexDirection,
        justifyContent: alignX,
        alignItems: alignY,
        marginTop: `${marginT}px`,
        marginBottom: `${marginB}px`,
        marginRight: `${marginR}px`,
        marginLeft: `${marginl}px`,
        paddingTop: `${paddingT}px`,
        paddingBottom: `${paddingB}px`,
        paddingRight: `${paddingR}px`,
        paddingLeft: `${paddingl}px`,
        borderRadius: `${borderRadius}px`,
        justifySelf: 'center',
        outline: hasSelectedNode ? '2px solid black' : 'none',
        //overflow: 'hidden',  // Ensure content does not overflow
        wordWrap: 'break-word', // Break long words
        whiteSpace: 'normal',  // Ensure text wraps normally
        textOverflow: 'ellipsis',
        contain: 'strict', // Optionally handle text overflow with ellipsis
        }}>
        {children}
    </div>
    </div>
  )
}

CustomisableContainer.craft = {
    rules: {
      canDrag: () => true,
      canDelete: () => true,
    }
  };