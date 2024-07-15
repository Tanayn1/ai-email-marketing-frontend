import { useNode } from '@craftjs/core';
import React from 'react'

export default function CanvasContainer({ children, backgroundColor } : any) {
    const { connectors: { connect, drag } } = useNode();

  return (
    <div ref={ref => {connect(drag(ref!))}} style={{background: backgroundColor}} className={"h-full w-full"}>
        {children}
    </div>
  )
}

CanvasContainer.craft = {
    rules: {
      canDrag: () => true,
    }
  };