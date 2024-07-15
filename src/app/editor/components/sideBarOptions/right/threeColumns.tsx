import { Element, useNode } from '@craftjs/core';
import React from 'react'
import { Column, TwoColumns } from '../../draggableComponents/twoColumns';

export default function ThreeColumns({align, backgroundColor, marginT, marginB, marginR, marginl, paddingT, paddingB, paddingR, paddingl} : TwoColumns) {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, id, actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
    }));
return (
    <div style={{display: 'flex', justifyContent: align, background: backgroundColor,  paddingTop: `${paddingT}px`,
    paddingBottom: `${paddingB}px`,
    paddingRight: `${paddingR}px`,
    paddingLeft: `${paddingl}px`,        
    marginTop: `${marginT}px`,
    marginBottom: `${marginB}px`,
    marginRight: `${marginR}px`,
    marginLeft: `${marginl}px`, }} className={ hasSelectedNode ? ` outline outline-black` : ''} ref={ref => {connect(drag(ref!))}}>
        <Element is={Column} id='left' elId='left' />
        <Element is={Column} id='middle' elId='middle' />
        <Element is={Column} id='right' elId='right' />

    </div>
)
}

