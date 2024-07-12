import React from 'react'

interface FontsDropdown {
    handleFontChange: Function,
    selectedFont: string
}

export default function FontsDropdown({ handleFontChange, selectedFont } : FontsDropdown) {

  return (
    <div>
        <select className=' bg-zinc-900 border border-zinc-700 rounded-md p-2 px-2 text-xs' id="fontSelect" onChange={(e)=>{handleFontChange(e.target.value); console.log(e.target.value)}} value={selectedFont}>
        <optgroup label="Serif Fonts">
          <option value="serif">Serif (Default)</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </optgroup>
        <optgroup label="Sans-serif Fonts">
          <option value="sans-serif">Sans-serif (Default)</option>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Roboto">Roboto</option>
          <option value="Open Sans">Open Sans</option>
        </optgroup>
        <optgroup label="Monospace Fonts">
          <option value="monospace">Monospace (Default)</option>
          <option value="Courier New">Courier New</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Consolas">Consolas</option>
        </optgroup>
        <optgroup label="Cursive Fonts">
          <option value="cursive">Cursive</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
        </optgroup>
        <optgroup label="Fantasy Fonts">
          <option value="fantasy">Fantasy</option>
          <option value="Impact">Impact</option>
        </optgroup>
      </select>
    </div>
  )
}
