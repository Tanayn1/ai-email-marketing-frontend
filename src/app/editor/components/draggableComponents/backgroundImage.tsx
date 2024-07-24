import { Element, useNode } from '@craftjs/core';
import React from 'react';

interface BackgroundImageProps {
    src: string;
    children?: React.ReactNode;
    height: number
    marginT: number,
    marginB: number, 
    marginl: number,
    marginR: number,
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ src, marginT, marginB, marginl, marginR, children, height }) => {
    const { connectors: { connect, drag }, hasSelectedNode } = useNode((state)=>({
      hasSelectedNode: state.events.selected
    }));

    return (
      <div  ref={ref => {connect(drag(ref!))}} style={{outline: hasSelectedNode ? '2px solid black' : 'none',     
      marginTop: `${marginT}px`,
      marginBottom: `${marginB}px`,
      marginRight: `${marginR}px`,
      marginLeft: `${marginl}px`,
       }} >
        <Element 
            id="Background Image"
            is="div"
            style={{
                backgroundImage: `url(${src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                height: height,
                width: '700px', // Fixed canvas width for email page builder
                
            }}
            canvas
        >
            {children}
        </Element>
      </div>
    );
}

export default BackgroundImage;
