import { Element, useNode } from '@craftjs/core';
import React from 'react'
import DraggableImage from './image';
import { Text } from './text';
import CustomisableContainer from './customisableContainer';
import DraggableButton from './draggableButton';

export default function ShopProducts() {
    const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
        hasSelectedNode: state.events.selected,
        hasDraggedNode: state.events.dragged,
        }));
  return (
    <div  ref={ref => {connect(drag(ref!))}} >
    <Element   id='row_one'  marginT={0} marginB={0} marginR={0} marginl={0} height={230} width={700} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='row' backgroundColor='' borderRadius={0} is={CustomisableContainer} >
        <Element id="shop_product1" is={CustomisableContainer} marginT={0} marginB={0} marginR={0} marginl={0} height={325} width={180} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='' borderRadius={0} >
          <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={160} width={160} align='start' src={null}/>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='Product One' fontSize={10}/>
          <DraggableButton  fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={0} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={10} paddingl={10} paddingB={10} fontFamily='Arial'  
              backgroundColor='#00000' textColor='#00000' text='SHOP NOW'/>
        </Element>
        <Element id="shop_product2" is={CustomisableContainer} marginT={0} marginB={0} marginR={0} marginl={0} height={325} width={180} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='' borderRadius={0} >
          <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={160} width={160} align='start' src={null}/>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='Product Two' fontSize={10}/>
          <DraggableButton  fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={0} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={10} paddingl={10} paddingB={10} fontFamily='Arial'  
              backgroundColor='#00000' textColor='#00000' text='SHOP NOW'/>
        </Element>
    </Element>
    <Element   id='row_two'  marginT={0} marginB={10} marginR={0} marginl={0} height={230} width={700} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='row' backgroundColor='' borderRadius={0} is={CustomisableContainer} >
        <Element id="shop_product3" is={CustomisableContainer} marginT={0} marginB={0} marginR={0} marginl={0} height={325} width={180} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='' borderRadius={0}>
          <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={160} width={160} align='start' src={null}/>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='Product Three' fontSize={10}/>
          <DraggableButton  fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={0} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={10} paddingl={10} paddingB={10} fontFamily='Arial'  
              backgroundColor='#00000' textColor='#00000' text='SHOP NOW'/>
        </Element>
        <Element id="shop_product4" is={CustomisableContainer} marginT={0} marginB={0} marginR={0} marginl={0} height={325} width={180} paddingT={0} paddingR={0} paddingl={0} paddingB={0} alignX='center' alignY='center' flexDirection='column' backgroundColor='' borderRadius={0}>
          <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={160} width={160} align='start' src={null}/>
          <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='Product Four' fontSize={10}/>
          <DraggableButton  fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={0} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={10} paddingl={10} paddingB={10} fontFamily='Arial'  
              backgroundColor='#00000' textColor='#00000' text='SHOP NOW'/>
        </Element>
    </Element>
    </div>
  )
}
