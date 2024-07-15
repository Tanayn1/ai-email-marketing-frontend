'use client'
import React, { useEffect, useState } from 'react'
import { useNode } from "@craftjs/core";
import ContentEditable from 'react-contenteditable'


interface Text {
    text: string,
    fontSize: number,
    align: 'center' | 'end' | 'start',
    italic: boolean,
    fontWeight: number,
    textColor: string,
    fontFamily: string,
    paddingT: number,
    paddingB: number, 
    paddingl: number,
    paddingR: number
}


export const Text = ({text, fontSize, align, italic, fontWeight, textColor, fontFamily, paddingT, paddingB, paddingR, paddingl} : Text) => {
  const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode , actions: {setProp} } = useNode((state)=>({
    hasSelectedNode: state.events.selected,
    hasDraggedNode: state.events.dragged,
  }));
  const [editable, setEditable] = useState(false);

  useEffect(() => {hasSelectedNode && setEditable(true)},[hasSelectedNode]);

  useEffect(()=>{hasDraggedNode && setEditable(false)},[hasDraggedNode])
  const getValidPadding = (value : any) => {
    return !isNaN(value) && value !== undefined && value !== null ? value : 0;
  };
  return (
     <div 
     ref={ref => {connect(drag(ref!))}}
     className={` flex ${align} ${italic === true && 'italic'}    `}
     style={{ fontWeight: fontWeight, display: 'flex', justifyContent: align}}
    >
      <ContentEditable
      key={textColor}
      disabled={!editable}
        html={text} 
        onChange={e => 
          setProp((props : any) => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        className={``}
        style={{fontSize: `${fontSize}px`, background: textColor, WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent', fontFamily: fontFamily, 
        paddingTop: `${paddingT}px`,
        paddingBottom: `${paddingB}px`,
        paddingRight: `${paddingR}px`,
        paddingLeft: `${paddingl}px`,
        whiteSpace: 'pre-wrap', // Ensures that the text wraps
        wordWrap: 'break-word', // Ensures that long words break to the next line
        overflow: 'hidden', // Prevents overflowing content
        textOverflow: 'ellipsis', // Adds ellipsis (...) for overflowing text
        maxWidth: '100%' // Ensures the element does not exceed the container width
        
      }}
      />
    </div>
  )
}

Text.craft = {
    rules: {
      canDrag: (node : any) => node.data.props.text != "Drag"
    }
  }