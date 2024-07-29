export function craftJsonToHtml(jsonString : string) {
    const nodes = JSON.parse(jsonString);
  
    function generateHtml(nodeId : string) {
      const node = nodes[nodeId];
      if (!node) return '';
  
      let html = '';
      const { type, props, nodes: childNodes, linkedNodes } = node;
  
      function generateStyles(props : any) {
        let styleString = '';
        for (const [key, value] of Object.entries(props)) {
          if (typeof value === 'object' || key === 'text') continue;
          switch (key) {
            case 'marginT': styleString += `margin-top: ${value}px; `; break;
            case 'marginR': styleString += `margin-right: ${value}px; `; break;
            case 'marginB': styleString += `margin-bottom: ${value}px; `; break;
            case 'marginl': styleString += `margin-left: ${value}px; `; break;
            case 'paddingT': styleString += `padding-top: ${value}px; `; break;
            case 'paddingR': styleString += `padding-right: ${value}px; `; break;
            case 'paddingB': styleString += `padding-bottom: ${value}px; `; break;
            case 'paddingl': styleString += `padding-left: ${value}px; `; break;
            case 'textColor': styleString += `color: ${value}; `; break;
            case 'backgroundColor': styleString += `background-color: ${value}; `; break;
            case 'fontFamily': styleString += `font-family: ${value}; `; break;
            case 'fontSize': styleString += `font-size: ${value}px; `; break;
            case 'fontWeight': styleString += `font-weight: ${value}; `; break;
            case 'align':
              styleString += `display: flex; justify-content: ${value}; `; 
              if (type.resolvedName === 'Text') {
                styleString += `text-align: ${value}; `;
              }
              break;
            case 'width': styleString += `width: ${value}px; `; break;
            case 'height': styleString += `height: ${value}px; `; break;
            case 'borderRadius': styleString += `border-radius: ${value}px; `; break;
            case 'flexDirection': styleString += `flex-direction: ${value}; `; break;
            case 'alignX': styleString += `justify-content: ${value}; `; break;
            case 'alignY': styleString += `align-items: ${value}; `; break;
            case 'italic': if (value) styleString += `font-style: italic; `; break;
            default:
              if (typeof value === 'string' || typeof value === 'number') {
                styleString += `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}; `;
              }
          }
        }
        return styleString.trim();
      }
  
      const style = generateStyles(props);
      const attributes = style ? ` style="${style}"` : '';
  
      switch (type.resolvedName) {
        case 'Text':
          html += `<p${attributes}>${props.text || ''}</p>`;
          break;
        case 'DraggableImage':
          if (props.src) {
            html += `<div style="display: flex; justify-content: ${props.align};">`;
            html += `<img src="${props.src}" width="${props.width}" height="${props.height}" ${attributes} alt=""/>`;
            html += `</div>`;
          } else {
            html += `<div style="display: flex; justify-content: ${props.align};">`;
            html += `<img src="${props.src}" width="${props.width}" height="${props.height}" ${attributes} alt=""/>`;
            html += `</div>`; }
          break;
        case 'DraggableButton':
          html += `<div style="display: flex; justify-content: ${props.align};">`;
          html += `<a href="${props.link || '#'}" target="_blank" style="text-decoration: none; ${style}">${props.text || ''}</a>`;
          html += `</div>`;
          break;
        case 'CustomisableContainer':
          html += `<div style="display: flex; ${style}">`;
          (childNodes || []).forEach((childId : any) => {
            html += generateHtml(childId);
          });
          Object.values(linkedNodes || {}).forEach((linkedNodeId : any) => {
            html += generateHtml(linkedNodeId);
          });
          html += '</div>';
          break;
        case 'CanvasContainer':
          html += `<div ${attributes}">`;
          (childNodes || []).forEach((childId : any) => {
            html += generateHtml(childId);
          });
          Object.values(linkedNodes || {}).forEach((linkedNodeId : any) => {
            html += generateHtml(linkedNodeId);
          });
          html += '</div>';
          break;        
        case 'Hero':
        case 'Testimonials':
          html += `<div style="display: flex; justify-content: center; ${style}">`;
          (childNodes || []).forEach((childId : any) => {
            html += generateHtml(childId);
          });
          Object.values(linkedNodes || {}).forEach((linkedNodeId : any) => {
            html += generateHtml(linkedNodeId);
          });
          html += '</div>';
          break;
        case 'div':
          html += `<div${attributes}>`;
          (childNodes || []).forEach((childId : any) => {
            html += generateHtml(childId);
          });
          Object.values(linkedNodes || {}).forEach((linkedNodeId : any) => {
            html += generateHtml(linkedNodeId);
          });
          html += '</div>';
          break;
        default:
          html += `<div${attributes}>`;
          (childNodes || []).forEach((childId : any) => {
            html += generateHtml(childId);
          });
          Object.values(linkedNodes || {}).forEach((linkedNodeId : any) => {
            html += generateHtml(linkedNodeId);
          });
          html += '</div>';
      }
  
      return html;
    }
  
    const rootNodeId = Object.keys(nodes).find(id => !nodes[id].parent);
    const bodyContent = generateHtml(rootNodeId!);
  
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated Email</title>
  </head>
  <body>
      ${bodyContent}
  </body>
  </html>
    `;
  }