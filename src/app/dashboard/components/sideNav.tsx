'use client'
import Image from 'next/image'
import React from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FcTemplate } from 'react-icons/fc';
import { CgTemplate } from 'react-icons/cg';
import { usePathname } from 'next/navigation';


export default function SideNav() {
    const pathname = usePathname()
  return (
    <div className=' fixed left-0 top-0 border-r border-zinc-900 bg-gradient-to-r from-black to-zinc-800  h-screen w-[250px] z-20'>
        <div className=' flex items-center gap-1 text-2xl font-semibold m-4'>
            <Image alt='logo' src={'/IMG_8769-removebg-preview (1).png'} width={50} height={50}/>
            <h1 className=' '>MailSpark</h1>
        </div>
        <div className=' flex flex-col mx-4 gap-2 mt-24'>
            <a href="/dashboard" className={` transition-colors duration-300 ${pathname === "/dashboard" ? 'bg-lime-400 hover:bg-lime-500' : 'hover:bg-zinc-700' } w-full    py-2 rounded-xl`}>
                <div className=' flex items-center gap-1 mx-3'>
                    <MdSpaceDashboard className=' h-6 w-6'/>
                    Dashboard
                </div>
            </a>
            <a href="/dashboard/projects" className=' w-full  hover:bg-zinc-700 py-2 rounded-xl'>
                <div className=' flex items-center gap-2 mx-3'>
                    <GrProjects className=' h-5 w-5'/>
                    Projects
                </div>
            </a>
            <a href="/dashboard/brands" className=' w-full  hover:bg-zinc-700 py-2 rounded-xl'>
                <div className=' flex items-center gap-1 mx-3'>
                    <RiShoppingBag4Line className=' h-5 w-5'/>
                    Brands
                </div>
            </a>
            <a href="/dashboard" className=' w-full  hover:bg-zinc-700 py-2 rounded-xl'>
                <div className=' flex items-center gap-1 mx-3'>
                    <CgTemplate className=' fill-white h-5 w-5'/>
                    Templates
                </div>
            </a>
        </div>
    </div>
  )
}

