import { useNode } from '@craftjs/core';
import React from 'react';

export default function CanvasContainer({ children, backgroundColor } : any) {
    const { connectors: { connect, drag }, selected } = useNode((node) => ({
        selected: node.events.selected
    }));

    return (
        <div 
            ref={ref => { connect(drag(ref!)) }} 
            style={{ 
                background: backgroundColor, 
                outline: selected ? '4px solid black' : 'none', // Highlight when selected
                minHeight: '100vh', // Full screen height
                minWidth: '100%'  // Minimum width to ensure it is clickable
            }} 
            className={"h-full w-full"}
        >
            {children}
        </div>
    );
}

CanvasContainer.craft = {
    rules: {
      canDrag: () => true,
    }
};

