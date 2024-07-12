'use client'
import React from 'react'
import {Editor, Frame, Element, useNode} from "@craftjs/core";
import LeftSideBar from './leftSideBar';
import { Text } from './draggableComponents/text';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import RightSideBar from './rightSideBar';
import Navbar from './navbar';
import DraggableButton from './draggableComponents/draggableButton';


export default function MailSparkEditor() {
  return (
    <div className="flex flex-col h-screen ">
      <Editor resolver={{ Text, Container, Button, DraggableButton }}>
        <Navbar />
        <div className="flex flex-grow">
          <LeftSideBar />
          <div className='flex justify-center items-center flex-grow'>
            <div className='w-[700px] mt-[70px] h-[800px] overflow-auto border shadow-2xl border-gray-300 text-black bg-white '>
              <Frame>
                <Element is="div" canvas>
                  <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='linear-gradient(to top left,#acb6e5,#86fde8)' fontWeight={800} italic={false} align='justify-start' fontSize={22} text='hello'/>
                </Element>
              </Frame>
            </div>
          </div>
          <RightSideBar />
        </div>
      </Editor>
    </div>
  )
}

