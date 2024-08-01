'use client'
import React, { useState } from 'react'
import { Slider } from '@/components/ui/slider'


export default function GradientSelector({setBackground} : {setBackground : Function}) {
    const [gradientStart, setGradientStart] = useState('#ffffff')
    const [gradientEnd, setGradientEnd] = useState('#000000')
    const [gradientAngle, setGradientAngle] = useState(0)
  return (
    // First, import the necessary components at the top of the file

// Then, inside the GradientPicker component, add these new state variables


// In the "gradient" TabsContent, replace the existing "Custom" section with this:
<div className="mt-4">
  <h1 className='text-zinc-400 text-xs font-semibold mb-2'>Custom</h1>
  <div className="flex gap-2 mb-2">
    <div className="flex-1">
      <label htmlFor="start-color" className="text-xs text-zinc-400">Start</label>
      <div className="flex items-center mt-1">
        <input
          type="color"
          id="start-color"
          value={gradientStart}
          onChange={(e) => setGradientStart(e.target.value)}
          className="w-6 h-6 p-0 border-none"
        />
        <input
          type="text"
          value={gradientStart}
          onChange={(e) => setGradientStart(e.target.value)}
          className="flex-1 ml-2 h-6 text-xs bg-zinc-800 border-zinc-700 rounded"
        />
      </div>
    </div>
    <div className="flex-1">
      <label htmlFor="end-color" className="text-xs text-zinc-400">End</label>
      <div className="flex items-center mt-1">
        <input
          type="color"
          id="end-color"
          value={gradientEnd}
          onChange={(e) => setGradientEnd(e.target.value)}
          className="w-6 h-6 p-0 border-none"
        />
        <input
          type="text"
          value={gradientEnd}
          onChange={(e) => setGradientEnd(e.target.value)}
          className="flex-1 ml-2 h-6 text-xs bg-zinc-800 border-zinc-700 rounded"
        />
      </div>
    </div>
  </div>
  <div className="mb-2">
    <label htmlFor="angle-slider" className="text-xs text-zinc-400">Angle: {gradientAngle}°</label>
    <Slider
      id="angle-slider"
      min={0}
      max={360}
      step={1}
      value={[gradientAngle]}
      onValueChange={(value) => setGradientAngle(value[0])}
      className="mt-1"
    />
  </div>
  <div
    className="h-6 w-full rounded cursor-pointer"
    style={{
      background: `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`,
    }}
    onClick={() => setBackground(`linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`)}
  />
</div>
  )
}
