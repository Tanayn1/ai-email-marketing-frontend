import { Element, useNode } from '@craftjs/core';
import React from 'react'

export default function TwoColumns({ children } : any) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div style={{display: 'flex'}} className={ hasSelectedNode ? ` outline outline-black` : ''} ref={ref => {connect(drag(ref!))}}>
        <Element id="left" is="div" canvas>
            {children}
        </Element>
        <Element id="right" is="div" canvas>
            {children}
        </Element>
    </div>
  )
}
