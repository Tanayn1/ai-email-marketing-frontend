'use client'
import React, { useEffect, useState } from 'react'
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'


interface Text {
    text: string,
    fontSize: number
}


export const Text = ({text, fontSize} : Text) => {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));
  const [editable, setEditable] = useState(false);

  useEffect(() => {hasSelectedNode && setEditable(true)},[hasSelectedNode]);

  useEffect(()=>{hasDraggedNode && setEditable(false)},[hasDraggedNode])
  return (
     <div 
     ref={ref => {connect(drag(ref!))}}
    >
      <ContentEditable
      disabled={!editable}
        html={text} 
        onChange={e => 
          setProp((props : any) => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`}}
      />
    </div>
  )
}

Text.craft = {
    rules: {
      canDrag: (node : any) => node.data.props.text != "Drag"
    }
  }