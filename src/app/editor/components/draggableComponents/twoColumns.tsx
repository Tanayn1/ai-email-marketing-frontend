    import { Element, useEditor, useNode } from '@craftjs/core';
    import React, { useEffect, useState } from 'react'
    import { Text } from './text';
    import Placeholder from './placeholder';
import DraggableImage from './image';



    export const Column = ({ elId, children, text, article} : { elId : string, children?: React.ReactNode, text?: string, article?: boolean}) => {
        const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, id, data,   actions: {setProp} } = useNode((state)=>({
            hasSelectedNode: state.events.selected,
            hasDraggedNode: state.events.dragged,
            data: state
            
        }));
        //const { query } = useEditor()
        //window.addEventListener('click', ()=>{            
        //    const theNodeId = query.node(id).linkedNodes()[0]
        //    console.log(theNodeId)
        //    const c = query.node(theNodeId).childNodes()
        //    console.log(c, id)
        //})
                                    
       if (article) {
        return (
            <Element id={elId} is="div"  canvas>
                <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={100} width={100} align='start' src={null}/>
            </Element> 
        )
       } else { return (
            <Element id={elId} is="div"  canvas>
                    <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='This is a heading' fontSize={30}/>
                    <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text={text ? text : 'This is a paragraph, drag and drop whatever you want into this column'} fontSize={10}/>
            </Element>
        )}
    }

    export interface TwoColumns {
        align: 'space-evenly' | 'space-between' | 'center' | 'start' | 'end' | 'space-around'
        backgroundColor: string 
        marginT: number,
        marginB: number, 
        marginl: number,
        marginR: number,
        paddingT: number,
        paddingB: number, 
        paddingl: number,
        paddingR: number, 
        leftWidth?: string,
        rightWidth?: string,
        columnLeftPaddingL?: number,
        columnLeftPaddingR?: number,
        columnRightPaddingL?: number,
        columnRightPaddingR?: number,
        leftText?: string
        rightText?: string,
        article?: boolean
        borderRadius: number
      }

    export default function TwoColumns({align, backgroundColor, marginT, marginB, marginR, marginl, 
        paddingT, paddingB, paddingR, paddingl, leftWidth, rightWidth, columnLeftPaddingL, 
        columnLeftPaddingR, columnRightPaddingL, columnRightPaddingR, leftText, rightText, article, borderRadius} : TwoColumns) {
        const { connectors: {connect, drag}, hasSelectedNode, hasDraggedNode, id, actions: {setProp} } = useNode((state)=>({
            hasSelectedNode: state.events.selected,
            hasDraggedNode: state.events.dragged,
        }));
        const { query } = useEditor()
    return (
        <div style={{display: 'flex', justifyContent: align, background: backgroundColor,  paddingTop: `${paddingT}px`,
        paddingBottom: `${paddingB}px`,
        paddingRight: `${paddingR}px`,
        paddingLeft: `${paddingl}px`,        
        marginTop: `${marginT}px`,
        marginBottom: `${marginB}px`,
        marginRight: `${marginR}px`,
        marginLeft: `${marginl}px`,
        borderRadius: `${borderRadius}px`,

        
        }} className={ hasSelectedNode ? ` outline outline-black` : ''} ref={ref => {connect(drag(ref!))}}>
            <div style={{width: leftWidth ? leftWidth : '50%', paddingLeft: `${columnLeftPaddingL}px`, 
            paddingRight: `${columnLeftPaddingR}px`}}>
                <Element is={Column} id='left' elId='left' text={leftText} />
            </div>
            <div style={{width: rightWidth ? rightWidth : '50%', 
            paddingLeft: `${columnRightPaddingL}px`, 
            paddingRight: `${columnRightPaddingR}px`}}>
                <Element is={Column} id='right' elId='right' text={rightText} article={article}/>
            </div>
        </div>
    )
    }
