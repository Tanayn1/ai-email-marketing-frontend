import { Button } from '@/components/ui/button'
import { useEditor } from '@craftjs/core';
import React, { LegacyRef } from 'react'
import { Text } from './draggableComponents/text';
import { IoTextOutline } from 'react-icons/io5';
import { IconType } from 'react-icons/lib';
import { RxButton } from "react-icons/rx";
import DraggableButton from './draggableComponents/draggableButton';


export default function LeftSideBar() {
  const { connectors, query } = useEditor();

  return (
    <div className=' fixed left-0 top-[70px] w-[400px] bg-zinc-900 h-screen '>
      <div className=' m-4 '>
        <h1 className=' text-lg font-semibold mb-2'>Elements</h1>
        <div className='grid grid-cols-2  '>
              <div ref={(ref)=>{
                if (ref) {connectors.create(ref, <Text paddingT={0} paddingR={0} paddingl={0} paddingB={0} fontFamily='Arial' textColor='#000000' italic={false} fontWeight={400} align='justify-start' text='text' fontSize={20}/>)}
              }}>
                <ElementOption  element='Text' Icon={IoTextOutline } />
              </div>
              <div ref={(ref)=>{if (ref) {connectors.create(ref, <DraggableButton backgroundColor='#00000' textColor='#00000' text='Click Me'/>)}}}>
                <ElementOption element='Button' Icon={RxButton}/>
              </div>
          
        </div>
      </div>
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