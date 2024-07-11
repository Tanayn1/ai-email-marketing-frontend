import React from 'react'
import { useEditor } from "@craftjs/core";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


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
    <div className=' fixed right-0 top-[70px] w-[220px] bg-zinc-900 h-screen'>
        {selected ? 
        <div>
          <Button onClick={()=>{actions.delete(selected.id)}}>Delete</Button> 
          {selected.name === 'Text' && 
          <div>
            <Input type='number' value={selected.props.fontSize}  onChange={(e)=>{
              actions.setProp(selected.id, (props)=>{props.fontSize = e.target.value})
              }} className='w-[80px] '/>
          </div>}
        </div>: ''}
    </div>
  )
}
