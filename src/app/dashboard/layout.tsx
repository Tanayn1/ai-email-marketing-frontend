import React from 'react'
import DashboardProviders from './components/dashboard-providers'
import SideNav from './components/sideNav'

export default function Dashboard_layout( {children} : Readonly<{
    children: React.ReactNode
}> ) {

  return (
    <DashboardProviders>
        <div>
            <SideNav/>
            <div className=' ml-[250px] mt-20'>
                {children}
            </div>
        </div>
    </DashboardProviders>
  )
}
