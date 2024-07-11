'use client'
import React from 'react'
import {Editor, Frame, Element, useNode} from "@craftjs/core";
import LeftSideBar from './leftSideBar';
import { Text } from './draggableComponents/text';
import { Container } from './container';
import { Button } from '@/components/ui/button';
import RightSideBar from './rightSideBar';
import Navbar from './navbar';


export default function MailSparkEditor() {
  return (
    <div>
        <Editor resolver={{Text, Container, Button}}>
          <Navbar/>
          <LeftSideBar/>
          <div className=' flex justify-center'>
            <Frame>
              <Element is="div" canvas>
                <h1>Hello world2</h1>
                <Text fontSize={12} text='hellow'/>
              </Element>
            </Frame>
          </div>
          <RightSideBar/>
        </Editor>
    </div>
  )
}

