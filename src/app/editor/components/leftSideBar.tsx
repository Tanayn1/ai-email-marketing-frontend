import { Button } from '@/components/ui/button'
import { useEditor } from '@craftjs/core';
import React from 'react'
import { Text } from './draggableComponents/text';

export default function LeftSideBar() {
  const { connectors, query } = useEditor();

  return (
    <div className=' fixed left-0 top-[70px] w-[220px] bg-zinc-900 h-screen'>
      <div className=' flex flex-col gap-3 m-4'>
        <Button ref={(ref)=>{
          if (ref) {connectors.create(ref, <Button>Click Me</Button>)}}}>Button</Button>
        <Button variant={'outline'} className=' bg-zinc-900 w-[50px]' ref={(ref)=>{
          if (ref) {connectors.create(ref, <Text text='text' fontSize={20}/>)}
        }}>Text</Button>
      </div>
    </div>
  )
}
