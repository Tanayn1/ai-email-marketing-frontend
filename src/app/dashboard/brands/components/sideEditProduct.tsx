import { XIcon } from 'lucide-react'
import React from 'react'

interface SideEditProduct {
    isShow: boolean,
    setIsShow: Function
}

export default function SideEditProduct( { isShow, setIsShow } : SideEditProduct ) {

    return (
    <div>
        {isShow && (<div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-10"></div>)}
        <aside className={`fixed  inset-y-0 right-0 transform ${isShow ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out bg-zinc-900  shadow-2xl rounded-l-lg  w-[500px] z-10`}>
            <div className=' relative'>
                <div className=' fixed  top-0 right-0  '>
                    <button className=' m-7' onClick={()=>{setIsShow(false)}}><XIcon/></button>
                </div>
            </div>
        </aside>
    </div>
)

}
