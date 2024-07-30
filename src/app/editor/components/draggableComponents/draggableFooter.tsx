import { Element, useNode } from '@craftjs/core';
import React from 'react'
import CustomisableContainer from './customisableContainer';
import DraggableImage from './image';
import DraggableSocials from './draggableSocials';
import { Text } from './text';

export default function DraggableFooter() {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
    }));
  return (
    <div ref={ref => {connect(drag(ref!))}}>
      <Element id="container" is={CustomisableContainer} width={700} height={400} marginT={0} marginB={10} marginR={0} marginl={0} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='#ffffff' borderRadius={0}>
        <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={100} width={100} align='center' src={null}/>
        <Element id="socials" is={DraggableSocials}/>
        <Element id="text_container" is={CustomisableContainer} width={400} height={70} marginT={0} marginB={10} marginR={0} marginl={0} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='#ffffff' borderRadius={0} canvas>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={600} align='center' text='1234 Pioneer Road Suite 5678 Innovate City, IC 98765 United States' fontSize={14}/>
        </Element>
      </Element>
    </div>
  )
}
