import { useNode } from '@craftjs/core';
import React from 'react'

export default function DraggableFooter() {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    }));
  return (
    <div ref={ref => {connect(drag(ref!))}}>

    </div>
  )
}
