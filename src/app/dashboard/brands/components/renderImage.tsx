import Image from "next/image";
import React from 'react'

export default function RenderImage({ htmlString } : { htmlString : string }) {
    const isSvg = (str: string) => str.trim().startsWith('<svg')
    if (isSvg(htmlString)) {
    const enlargeSVG = (svgString: string): string => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      
      // Set width and height attributes
      svgElement.setAttribute('width', '200');
      svgElement.setAttribute('height', '200');
      
      return new XMLSerializer().serializeToString(svgDoc);
    };
  
    const modifyHTMLString = (html: string): string => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const svgs = doc.getElementsByTagName('svg');
  
      for (let i = 0; i < svgs.length; i++) {
        const svgString = new XMLSerializer().serializeToString(svgs[i]);
        const enlargedSVG = enlargeSVG(svgString);
        const newSvgElement = parser.parseFromString(enlargedSVG, 'image/svg+xml').documentElement;
        svgs[i].parentNode?.replaceChild(newSvgElement, svgs[i]);
      }
  
      return new XMLSerializer().serializeToString(doc.body);
    };
  
    const modifiedHtmlString = modifyHTMLString(htmlString);
  
    return <div dangerouslySetInnerHTML={{ __html: modifiedHtmlString }} />;
} else {
    return <Image alt="logo" src={htmlString} width={200} height={200}/>
}
}


