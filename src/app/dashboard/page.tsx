import React from 'react'
import { HiPencilAlt } from 'react-icons/hi'
import { RiAiGenerate } from 'react-icons/ri'
import { useUser } from './components/dashboard-providers'
import WelcomeBack from './components/welcomeBack'
import DashboardButtons from './components/dashboardButtons'
import Projects from './components/projects'

export default function Page() {
  return (
    <div className=' ml-6'>
      <WelcomeBack/>
      <DashboardButtons/>
      <div className=' mt-8'>
        <h1 className=' text-2xl font-semibold '>Projects</h1>
        <Projects/>
      </div>
    </div>
  )
}