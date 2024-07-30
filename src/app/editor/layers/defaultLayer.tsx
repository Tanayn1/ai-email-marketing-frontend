import { useEditor } from '@craftjs/core';
import { useLayer } from '@craftjs/layers';
import React from 'react';
import styled from 'styled-components';
import { LayerHeader } from '../components/layers';

const LayerNodeDiv = styled.div<{
  expanded: boolean;
  hasCanvases: boolean;
  hovered: boolean;
}>`
  background: ${(props) => (props.hovered ? '#1c1c1e' : 'transparent')}; /* Zinc-800 */
  display: block;
  padding-bottom: ${(props) => (props.hasCanvases && props.expanded ? 5 : 0)}px;
`;

const LayerChildren = styled.div<{ hasCanvases: boolean }>`
  margin: 0 0 0 ${(props) => (props.hasCanvases ? 35 : 0)}px;
  background: ${(props) =>
    props.hasCanvases ? 'rgba(24, 24, 27, 0.02)' : 'transparent'}; /* Zinc-900 with opacity */
  position: relative;

  ${(props) =>
    props.hasCanvases
      ? `
  
  box-shadow: 0px 0px 44px -1px #00000014;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom:5px;
  margin-top:5px; 
  > * { overflow:hidden; }
    &:before { 
      position:absolute;
      left:-19px;
      width: 2px;
      height:100%;
      content: " ";
      background:#3f3f46; /* Zinc-700 */
    }
  `
      : ''}
`;

export type DefaultLayerProps = {
  children?: React.ReactNode;
};

export const Layer = ({ children }: DefaultLayerProps) => {
  const {
    id,
    expanded,
    hovered,
    connectors: { layer },
  } = useLayer((layer) => ({
    hovered: layer.event.hovered,
    expanded: layer.expanded,
  }));
  const { hasChildCanvases } = useEditor((state, query) => {
    return {
      hasChildCanvases: query.node(id).isParentOfTopLevelNodes(),
    };
  });

  return (
    <LayerNodeDiv
      ref={layer}
      expanded={expanded}
      hasCanvases={hasChildCanvases}
      hovered={hovered}
    >
      <LayerHeader />
      {children ? (
        <LayerChildren
          hasCanvases={hasChildCanvases}
          className="craft-layer-children"
        >
          {children}
        </LayerChildren>
      ) : null}
    </LayerNodeDiv>
  );
};