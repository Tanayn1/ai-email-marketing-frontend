'use client'
import React, { useEffect, useState } from 'react'
import {Editor, Frame, Element, useNode} from "@craftjs/core";
import LeftSideBar from './leftSideBar';
import { Text } from './draggableComponents/text';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import RightSideBar from './rightSideBar';
import Navbar from './navbar';
import DraggableButton from './draggableComponents/draggableButton';
import DraggableImage from './draggableComponents/image';
import TwoColumns, { Column } from './draggableComponents/twoColumns';
import Placeholder from './draggableComponents/placeholder';
import ThreeColumns from './sideBarOptions/right/threeColumns';
import CanvasContainer from './CanvasContainer';
import { useRouter, useSearchParams } from 'next/navigation';
import { EditorSession } from '../../../../types/types';
import { fetchSession } from '../actions';
import { Divide, Loader2 } from 'lucide-react';
import lz from "lzutf8";
import Hero from './draggableComponents/hero';
import CustomisableContainer from './draggableComponents/customisableContainer';
import Testimonials from './draggableComponents/testimony';
import { MdOutlineStarPurple500 } from 'react-icons/md';
import Socials from './draggableComponents/socials';
import BackgroundImage from './draggableComponents/backgroundImage';
import Image from 'next/image';
import ShopProducts from './draggableComponents/shopProducts';
import DraggableFooter from './draggableComponents/draggableFooter';
import DraggableSocials from './draggableComponents/draggableSocials';

export default function MailSparkEditor() {
  const [session, setSession] = useState<null | EditorSession>(null);
  const [json, setJson] = useState<null | any>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session');

  const fetchData = async ()=>{
    if (sessionId) {
    const data: EditorSession | null = await fetchSession(sessionId);
    if (data) {
      setSession(data) 
      if (data?.email_saves.length !== 0) {
        console.log(data)
        console.log(data?.email_saves[data?.email_saves.length - 1].save);
        const j = lz.decompress(lz.decodeBase64(data?.email_saves[data?.email_saves.length - 1].save));
        setJson(JSON.parse(j));
      }

    } else {
      router.push('/dashboard')

    } 
  } else {
    router.push('/dashboard')
  }
  }
  useEffect(()=>{
    fetchData();
  },[])
 if (sessionId && session   ) {
  return (
    <div className="flex flex-col h-screen ">
      <Editor  resolver={{ Text, Container, Button, DraggableButton, DraggableImage, TwoColumns, Placeholder, Column, ThreeColumns, CanvasContainer, Hero, CustomisableContainer, Testimonials, MdOutlineStarPurple500, DraggableSocials, BackgroundImage, Image, ShopProducts, DraggableFooter }}>
        <Navbar  session={session} />
        <div className="flex flex-grow">
          <LeftSideBar />
          <div className='flex justify-center items-center flex-grow'>
            <div className='w-[700px] mt-[70px] min-h-screen overflow-x-clip border shadow-2xl border-gray-300 text-black bg-white '>
              <Frame data={json} >
                <Element is={CanvasContainer} backgroundColor='#ffffff'  canvas/>
              </Frame>
            </div>
          </div>
          <RightSideBar product_id={session.product_id} />
        </div>
      </Editor>
    </div>
  )} /*else if (sessionId && session) {
    <div className="flex flex-col h-screen ">
    <Editor  resolver={{ Text, Container, Button, DraggableButton, DraggableImage, TwoColumns, Placeholder, Column, ThreeColumns, CanvasContainer, Hero, CustomisableContainer, Testimonials, MdOutlineStarPurple500, Socials, BackgroundImage, Image }}>
      <Navbar  session={session} />
      <div className="flex flex-grow">
        <LeftSideBar />
        <div className='flex justify-center items-center flex-grow'>
          <div className='w-[700px] mt-[70px] min-h-screen overflow-x-clip border shadow-2xl border-gray-300 text-black bg-white '>
            <Frame >
              <Element is={CanvasContainer} backgroundColor='#ffffff'  canvas>
                <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='linear-gradient(to top left,#acb6e5,#86fde8)' fontWeight={800} italic={true} align='start' fontSize={16} text='text'/>
              </Element>
            </Frame>
          </div>
        </div>
        <RightSideBar product_id={session.product_id} />
      </div>
    </Editor>
  </div>
  } else {
    return (
    <div className=' flex justify-center h-screen items-center'>
      <Loader2 className=' h-28 w-28 animate-spin'/>
    </div>
    )
  }*/
}

