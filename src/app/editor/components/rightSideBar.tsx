import React from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaAlignJustify, FaAlignLeft, FaAlignRight, FaRedo, FaRegTrashAlt, FaUndo } from 'react-icons/fa';
import TextOptions from './sideBarOptions/right/textOptions';
import ButtonOptions from './sideBarOptions/right/buttonOptions';
import ImageOptions from './sideBarOptions/right/imageOptions';
import TwoColumnsOptions from './sideBarOptions/right/twoColumnsOptions';
import CanvasContainerOptions from './sideBarOptions/right/CanvasContainerOptions';
import CustomisableContainerOptions from './sideBarOptions/right/customisableContainerOptions';
import SocialOptions from './sideBarOptions/right/socialOptions';
import BackgroundImageOptions from './sideBarOptions/right/backgroundImageOptions';

interface RightSideBar {
  product_id: string,
  session_id: string
}
export default function RightSideBar({ product_id, session_id } : RightSideBar) {
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
        <div className=' mx-10 mt-4 gap-2 flex'>
          <Button variant={'outline'} onClick={()=>{actions.history.undo()}} className=' text-zinc-400 bg-zinc-900 shadow border-zinc-700'><FaUndo /></Button>
          <Button variant={'outline'} onClick={()=>{actions.history.redo()}} className=' text-zinc-400 bg-zinc-900 shadow border-zinc-700'><FaRedo /></Button>
        </div>
        {selected ? 
        <div className=' mx-10 mb-10 mt-3'>
          {selected.name === 'Text' && <TextOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'DraggableButton' && <ButtonOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'DraggableImage' && <ImageOptions selected={selected} actions={actions} product_id={product_id}/>}
          {selected.name === 'TwoColumns' && <TwoColumnsOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'ThreeColumns' && <TwoColumnsOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'CustomisableContainer' && <CustomisableContainerOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'CanvasContainer' && <CanvasContainerOptions session_id={session_id} selected={selected} actions={actions}/>}
          {selected.name === 'Socials' && <SocialOptions selected={selected} actions={actions}/>}

          {selected.isDeletable && 
            <Button className=' gap-1 mt-5 w-full text-xs bg-red-800 bg-opacity-20 hover:bg-white hover:text-black text-red-500' onClick={()=>{actions.delete(selected.id)}}>
              Delete
              <FaRegTrashAlt />
            </Button>}
        </div>: ''}
    </div>
  )
}
