import React from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaAlignJustify, FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import TextOptions from './sideBarOptions/right/textOptions';
import ButtonOptions from './sideBarOptions/right/buttonOptions';
import ImageOptions from './sideBarOptions/right/imageOptions';


export default function RightSideBar() {
  const { actions, selected } = useEditor((state, query) => {
    const [currentNodeId] : any = state.events.selected;
    let selected;

    if ( currentNodeId ) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
        props: query.node(currentNodeId).get().data.props
      };
    }
    
    return {
      selected
    }
  });
  return (
    <div className=' fixed right-0 top-[70px] w-[320px] bg-zinc-900 h-screen'>
        {selected ? 
        <div>
          <Button onClick={()=>{actions.delete(selected.id)}}>Delete</Button> 
          {selected.name === 'Text' && <TextOptions selected={selected} actions={actions}/>}
          {selected.name === 'DraggableButton' && <ButtonOptions selected={selected} actions={actions}/>}
          {selected.name === 'DraggableImage' && <ImageOptions selected={selected} actions={actions}/>}
        </div>: ''}
    </div>
  )
}
