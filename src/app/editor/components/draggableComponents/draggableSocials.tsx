import { Element, useNode } from '@craftjs/core';
import React from 'react'
import CustomisableContainer from './customisableContainer';
import DraggableImage from './image';

export default function DraggableSocials() {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
        }));
  return (
    <div ref={ref => {connect(drag(ref!))}}>
        <Element id="container" is={CustomisableContainer} width={700} height={70} marginT={10} marginB={10} marginR={0} marginl={0} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='row' backgroundColor='#ffffff' borderRadius={0}>
            <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={60} width={60} align='center' src={"https://mailspark.s3.ap-southeast-2.amazonaws.com/1d1fab2ecd077bf0c403a1fecf49e696-removebg-preview+(2).png"}/>
            <DraggableImage marginT={0} marginB={0} marginR={10} marginl={10} height={60} width={60} align='center' src={"https://mailspark.s3.ap-southeast-2.amazonaws.com/download-removebg-preview+(17)+(1).png"}/>
            <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={60} width={60} align='center' src={"https://mailspark.s3.ap-southeast-2.amazonaws.com/download-removebg-preview+(18)+(1).png"}/>
        </Element>
    </div>
  )
}
