import { Element, useNode } from '@craftjs/core'
import React from 'react'
import CustomisableContainer from './customisableContainer';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import { Text } from './text';

export default function Testimonials() {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
      }));
  return (
    <div ref={ref => {connect(drag(ref!))}} style={{outline: hasSelectedNode ? '2px solid black' : 'none'}}>
        <Element id='testominal-container' marginT={0} marginB={0} marginR={0} marginl={0} height={200} width={600} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='#fffff1' borderRadius={20} is={CustomisableContainer}  canvas>
          <div className=' flex text-yellow-400 fill-yellow-400 '>
            <MdOutlineStarPurple500 className=' h-8 w-8' />
            <MdOutlineStarPurple500 className=' h-8 w-8' />
            <MdOutlineStarPurple500 className=' h-8 w-8' />
            <MdOutlineStarPurple500 className=' h-8 w-8' />
            <MdOutlineStarPurple500 className=' h-8 w-8' />
          </div>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='center' text='"This is the review"' fontSize={15}/>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='center' text='-John Smith' fontSize={12}/>
        </Element>
    </div>
  )
}

//Testimonials.Craft= {
//  rules: {
//    canDrag: () => true,
//    canDelete: () => true,
//  },
//}
