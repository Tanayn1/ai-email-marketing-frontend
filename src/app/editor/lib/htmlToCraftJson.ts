function htmlToCraftJson(html: string): string {
    // Parse HTML string into a DOM structure
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Start with the body element
    const bodyElement = doc.body;
    
    // Function to generate a unique ID
    function generateId(): string {
      return Math.random().toString(36).substr(2, 9);
    }
    
    // Function to convert HTML element to CraftJS node
    function convertElementToCraftNode(element: Element, parentId: string | null): any {
      const id = generateId();
      const type = mapElementToCraftType(element);
      const props = extractProps(element);
      
      const node: any = {
        type: { resolvedName: type },
        props,
        parent: parentId,
        nodes: [],
        linkedNodes: {},
      };
      
      // Convert child elements
      Array.from(element.children).forEach(child => {
        const childNode = convertElementToCraftNode(child, id);
        node.nodes.push(childNode.id);
      });
      
      return { id, ...node };
    }
    
    // Function to map HTML elements to CraftJS types
    function mapElementToCraftType(element: any): string {
      switch (element.tagName.toLowerCase()) {
        case 'p': return 'Text';
        case 'img': return 'DraggableImage';
        case 'a': return 'DraggableButton';
        case 'div': 
          if (element.style.display === 'flex' && element.style.justifyContent === 'center') {
            return 'Hero';
          }
          return 'CustomisableContainer';
        case 'table': return 'CustomisableContainer';
        case 'tr': return 'CustomisableContainer';
        case 'td': return 'CustomisableContainer';
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6': return 'Text';
        case 'ul': return 'CustomisableContainer';
        case 'li': return 'Text';
        default: return 'div';
      }
    }
    
    // Function to extract props from HTML element
    function extractProps(element: Element): any {
      const props: any = {};
      
      // Extract inline styles
      const style = element.getAttribute('style');
      if (style) {
        const styleProps = style.split(';').reduce((acc: any, prop) => {
          const [key, value] = prop.split(':').map(s => s.trim());
          if (key && value) {
            const propKey = convertStyleToProp(key);
            acc[propKey] = convertValueToAppropriateType(propKey, value);
          }
          return acc;
        }, {});
        Object.assign(props, styleProps);
      }
      
      // Extract other attributes
      if (element.tagName.toLowerCase() === 'img') {
        props.src = element.getAttribute('src');
        props.width = parseInt(element.getAttribute('width') || '0', 10);
        props.height = parseInt(element.getAttribute('height') || '0', 10);
        props.alt = element.getAttribute('alt') || '';
      }
      
      if (element.tagName.toLowerCase() === 'a') {
        props.link = element.getAttribute('href');
        props.text = element.textContent;
      }
      
      if (element.tagName.toLowerCase() === 'p' || 
          ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element.tagName.toLowerCase())) {
        props.text = element.textContent;
      }
      
      return props;
    }
    
    // Function to convert CSS style names to CraftJS prop names
    function convertStyleToProp(style: string): string {
      const specialCases: { [key: string]: string } = {
        'margin-top': 'marginT',
        'margin-right': 'marginR',
        'margin-bottom': 'marginB',
        'margin-left': 'marginL',
        'padding-top': 'paddingT',
        'padding-right': 'paddingR',
        'padding-bottom': 'paddingB',
        'padding-left': 'paddingL',
        'color': 'textColor',
        'background-color': 'backgroundColor',
        'font-family': 'fontFamily',
        'font-size': 'fontSize',
        'font-weight': 'fontWeight',
        'text-align': 'align',
        'border-radius': 'borderRadius',
        'flex-direction': 'flexDirection',
        'justify-content': 'alignX',
        'align-items': 'alignY',
      };
      
      if (style in specialCases) {
        return specialCases[style];
      }
      
      return style.replace(/-([a-z])/g, g => g[1].toUpperCase());
    }
    
    // Function to convert values to appropriate types
    function convertValueToAppropriateType(key: string, value: string): any {
      const numericProps = ['marginT', 'marginR', 'marginB', 'marginL', 'paddingT', 'paddingR', 'paddingB', 'paddingL', 'fontSize', 'width', 'height', 'borderRadius'];
      if (numericProps.includes(key)) {
        return parseInt(value, 10);
      }
      if (key === 'fontWeight') {
        return value === 'bold' ? 700 : parseInt(value, 10);
      }
      if (value === 'true') return true;
      if (value === 'false') return false;
      return value;
    }
    
    // Convert the body element to CraftJS structure
    const craftNodes = convertElementToCraftNode(bodyElement, null);
    
    // Build the final CraftJS JSON structure
    const craftJson: any = {};
    function addNodeToJson(node: any) {
      craftJson[node.id] = node;
      node.nodes.forEach((childId: string) => {
        addNodeToJson(craftJson[childId]);
      });
    }
    addNodeToJson(craftNodes);
    
    return JSON.stringify(craftJson, null, 2);
  }