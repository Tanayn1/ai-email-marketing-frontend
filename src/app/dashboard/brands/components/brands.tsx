'use client'
import React, { useEffect, useState } from 'react'
import { Brand } from '../../../../../types/types'
import { FaPlus } from 'react-icons/fa'
import { fetchBrands } from '../actions';
import { toast } from 'sonner';
import CreateNewBrandModal from './createNewBrandModal';
import Image from 'next/image';

export default function Brands() {
    const [brands, setBrands] = useState<null | Array<Brand>>(null);
    const [isShow, setIsShow] = useState<boolean>(false)

    const fetchData = async () => {
        const response = await fetchBrands()
        if (response) {
            setBrands(response)
        } else {
            toast.error('There was an error fetching brands')
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className=' '>
        <div className=' m-10'>
            <h1 className=' text-3xl font-semibold'>Brands</h1>
            <div className=' mt-4 mx-7 grid grid-cols-3'>
                <div onClick={()=>{setIsShow(true)}} className=' w-[250px] h-[150px] bg-lime-400 rounded-xl cursor-pointer  hover:bg-lime-500 '>
                    <div className=' flex justify-center h-[150px] items-center'>
                        <FaPlus className=' h-[40px] w-[40px] fill-zinc-700'/>
                    </div>
                </div>
                {brands?.map((brand, index)=>{
                   
                    return (
                        <div key={index} className=' glass-container rounded-xl w-[250px] h-[150px]'>
                            <div className=' flex flex-col items-center'>
                                { 
                                isSvg(brand.logo!) ? <RenderHTML htmlString={brand.logo!}/> :
                                    <Image alt={`logo ${index}`} src={brand.logo!} width={100} height={100}/>
                                    }
                                <h1>{brand.brand_name}</h1> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <CreateNewBrandModal isShow={isShow} setIsShow={(value : boolean)=>{setIsShow(value)}}/>
    </div>
  )
}


const RenderHTML = ({ htmlString }: { htmlString: string }) => {
    const enlargeSVG = (svgString: string): string => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
      const svgElement = svgDoc.documentElement;
      
      // Set width and height attributes
      svgElement.setAttribute('width', '100');
      svgElement.setAttribute('height', '100');
      
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
  };

  const isSvg = (str: string) => str.trim().startsWith('<svg')