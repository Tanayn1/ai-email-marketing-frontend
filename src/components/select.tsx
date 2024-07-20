'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import clsx from 'clsx'
import { CheckIcon, ChevronDownIcon, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Skeleton } from './ui/skeleton'



interface Select {
    options: Array<SelectOption> | null
    setValue: Function
    placeholder: string,
    className?: string
}

export interface SelectOption {
    value: string | number, 
    name: string
}

export default function Select({ options, setValue, placeholder, className }: Select) {
  const [selected, setSelected] = useState<null | { value: string | number, name: string }>(null)

 if (options) {return (
    <div className={className}>
      <Listbox  value={selected} onChange={(value)=>{setSelected(value); setValue(value) }}>
        <ListboxButton
          className={clsx(
            'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}
        >
          {selected ? selected.name : placeholder }
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            'w-[var(--button-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
            'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
          )}
        >
          {options.map((option, index) => (
            <ListboxOption
              key={option.name}
              value={option}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
              <div className="text-sm/6 text-white">{option.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </div>
  )} else {
    return (
       //<div className={`${className} `}>
       //<div className={clsx(
       //    'w-[var(--button-width)] flex justify-center rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none',
       //    'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
       //  )}> <Loader2 className=' animate-spin'/></div>
       //  </div>

       //<Skeleton className={`${className} w-[200px] h-[30px]`}/>
       <div className={className}>
       <Listbox disabled>
        <ListboxButton disabled
        className={clsx(
            'relative block w-full rounded-lg bg-white/5 py-1.5 pr-8 pl-3 text-left text-sm/6 text-white',
            'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
          )}>{placeholder}</ListboxButton>
       </Listbox>
       </div>
    )
  }
}