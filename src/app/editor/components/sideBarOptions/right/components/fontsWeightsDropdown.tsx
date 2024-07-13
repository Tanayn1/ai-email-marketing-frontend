import { Options } from '@/app/editor/types'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from '@/components/ui/dropdown-menu'
import react from 'react'
import { MdOutlineFormatBold } from 'react-icons/md'

export const FontWeightDropdown = ({ actions, selected } : Options) => {
    if (selected) return (
         <DropdownMenu>
         <DropdownMenuTrigger>
             <Button variant={'outline'}  className={` shadow bg-zinc-900 border-zinc-700 text-zinc-400 text-xs flex gap-1 `}>
                 <MdOutlineFormatBold />{selected.props.fontWeight}
             </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className=' bg-zinc-800 text-white border-zinc-700'>
             <DropdownMenuLabel>Font Weight</DropdownMenuLabel>
             <DropdownMenuSeparator className=' bg-zinc-600' />
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 100})}}>100</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 200})}}>200</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 300})}}>300</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 400})}}>400</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 500})}}>500</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 600})}}>600</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 700})}}>700</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 800})}}>800</DropdownMenuItem>
             <DropdownMenuItem onClick={()=>{actions.setProp(selected.id, (props)=>{props.fontWeight = 900})}}>900</DropdownMenuItem>
         </DropdownMenuContent>
         </DropdownMenu>
     )
 }