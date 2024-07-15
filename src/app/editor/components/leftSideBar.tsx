import { Button } from '@/components/ui/button'
import { useEditor } from '@craftjs/core';
import React, { LegacyRef } from 'react'
import { Text } from './draggableComponents/text';
import { IoImageOutline, IoNewspaperOutline, IoTextOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { RxButton } from "react-icons/rx";
import DraggableButton from './draggableComponents/draggableButton';
import DraggableImage from './draggableComponents/image';
import { TbColumns2, TbColumns3 } from "react-icons/tb";
import TwoColumns from './draggableComponents/twoColumns';
import ThreeColumns from './sideBarOptions/right/threeColumns';
import { BsLayoutSidebarInset, BsLayoutSidebarInsetReverse, BsReverseLayoutSidebarReverse } from "react-icons/bs";
import { ScrollArea } from '@/components/ui/scroll-area';
import { FaHeading } from 'react-icons/fa6';



export default function LeftSideBar() {
  const { connectors, query } = useEditor();

  return (
    <div className=' fixed left-0 top-[70px] w-[350px] bg-zinc-900 h-screen '>
      <ScrollArea className=' h-[600px]'>
      <div className=' m-4 '>
        <h1 className=' text-lg font-semibold mb-2'>Elements</h1>
        <div className='grid grid-cols-2 gap-2  '>
              <div ref={(ref)=>{
                if (ref) {connectors.create(ref, <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='start' text='This is text' fontSize={20}/>)}
              }}>
                <ElementOption  element='Text' Icon={IoTextOutline } />
              </div>
              <div ref={(ref)=>{
                if (ref) {connectors.create(ref, <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={600} align='center' text='This Is A Heading' fontSize={40}/>)}
              }}>
                <ElementOption  element='Header' Icon={FaHeading} />
              </div>
              <div ref={(ref)=>{if (ref) {connectors.create(ref, <DraggableButton
              fontSize={20} fontWeight={500} borderRadius={10} align='center'
              marginT={0} marginB={0} marginR={0} marginl={0} link={undefined}
              paddingT={10} paddingR={10} paddingl={10} paddingB={10}  
              backgroundColor='#00000' textColor='#00000' text='Click Me'/>)}}}>
                <ElementOption element='Button' Icon={RxButton}/>
              </div>
                <div ref={(ref)=>{
                  if (ref) {connectors.create(ref, <DraggableImage marginT={0} marginB={0} marginR={0} marginl={0} height={100} width={100} align='start' src={null}/>)}
                }}
                >
                  <ElementOption element='Image' Icon={IoImageOutline}/>
                </div>

        </div>
        <div className=' mt-3'>
          <h1 className=' text-lg font-semibold mb-2'>Layouts</h1>
          <div className=' grid grid-cols-2 gap-2'>
                <div ref={(ref)=>{
                  if (ref) {connectors.create(ref, <TwoColumns borderRadius={0} paddingT={10} paddingR={10} paddingl={10} paddingB={10} marginT={0} marginB={0} marginR={0} marginl={0} backgroundColor='#ffffff' align='space-evenly'/>)}
                }}>
                  <ElementOption element='Two Columns' Icon={TbColumns2}/>
                </div>
                <div ref={(ref)=>{
                    if (ref) {connectors.create(ref, <ThreeColumns borderRadius={0} paddingT={10} paddingR={0} paddingl={0} paddingB={10} marginT={0} marginB={0} marginR={0} marginl={0} backgroundColor='#ffffff' align='space-evenly'/>)}
                }}>
                  <ElementOption element='Three Columns' Icon={TbColumns3}/>
                </div>
                <div ref={(ref)=>{
                    if (ref) {connectors.create(ref, <TwoColumns borderRadius={0} rightText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' leftText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                      paddingT={10} paddingR={0} paddingl={0} paddingB={10} marginT={0} marginB={0} marginR={20} marginl={20} backgroundColor='#ffffff' align='space-evenly' leftWidth='70%' rightWidth='30%' columnLeftPaddingR={30}/>)}
                }}>
                  <ElementOption element='Right Sidebar' Icon={BsLayoutSidebarInsetReverse}/>
                </div>
                <div ref={(ref)=>{
                    if (ref) {connectors.create(ref, <TwoColumns borderRadius={0} rightText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                      leftText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                      paddingT={10} paddingR={0} paddingl={0} paddingB={10} marginT={0} marginB={0} marginR={20} marginl={20} backgroundColor='#ffffff' align='space-evenly' leftWidth='30%' rightWidth='70%' columnRightPaddingL={30}/>)}
                  }}>
                  <ElementOption element='Left Sidebar' Icon={BsLayoutSidebarInset}/>
                </div>
                <div ref={(ref)=>{
                    if (ref) {connectors.create(ref, <TwoColumns borderRadius={0} article={true} rightText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' leftText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
                      paddingT={10} paddingR={0} paddingl={0} paddingB={10} marginT={0} marginB={0} marginR={20} marginl={20} backgroundColor='#ffffff' align='space-evenly' leftWidth='70%' rightWidth='30%' columnLeftPaddingR={30}/>)}
                }}>
                  <ElementOption element='Article' Icon={IoNewspaperOutline}/>
                </div>
          </div>
        </div>
          <div className=' mt-3'>
            <h1 className=' text-lg font-semibold mb-2'>Sections</h1>
          </div>
      </div>

      </ScrollArea>
    </div>
  )
}

interface ElementOption {
  element: string,
  Icon: IconType
}


const ElementOption = ({  element, Icon } : ElementOption) => {
  return (
  <div className=' cursor-pointer hover:bg-zinc-950 bg-zinc-900 border border-zinc-700 rounded-2xl h-[150px] w-[150px] shadow-2xl'>
      <div className=' flex justify-center h-[150px] items-center'>
        <div className=' flex flex-col items-center text-zinc-400'>
          <Icon className=' h-10 w-10'/>
          <h1>{element}</h1>
        </div>
      </div>
  </div>
  )
}