import { Element, useNode } from '@craftjs/core';
import React from 'react'
import { Text } from './text';
import DraggableImage from './image';
import DraggableButton from './draggableButton';

export default function Hero() {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div ref={ref => {connect(drag(ref!))}}>
        <Element id="hero" is="div" canvas>
        <Text paddingT={40} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={600} align='center' text='This Is A Heading' fontSize={40}/>
        <DraggableImage width={260} height={260} align='center' marginB={0} marginT={20} marginR={0} marginl={0} src={null}/>
        <DraggableButton
              fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={20} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={20} paddingl={20} paddingB={10}  
              backgroundColor='#09203f' textColor='#FFFFFF' text='Click Me'/>
        </Element>
    </div>
  )
}
