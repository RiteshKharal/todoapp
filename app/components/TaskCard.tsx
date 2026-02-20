'use client'
import React from 'react'
import * as fonts from '../font/fonts'
import { useState, useRef, useEffect } from 'react'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { HiDotsHorizontal } from "react-icons/hi";

type TaskCardProps = {
  title: string
  desc: string
  date: string
}

export default function TaskCard({ title, desc, date }: TaskCardProps) {
  const [checked, setChecked] = useState(false)

  const completedStyles = checked
    ? 'line-through text-gray-400'
    : ''

  return (
    <>
    <button
      type="button"
      onClick={() => setChecked(prev => !prev)}
      aria-pressed={checked}
      className={`w-full text-left p-5 rounded-2xl flex flex-col gap-4
      transition-all duration-200
      shadow-sm hover:shadow-md active:scale-[0.99]
      focus:outline-none 
      ${checked ? 'bg-primary/50' : 'bg-foreground/5'} cursor-pointer`}
      title='Mark as Done'
    >
      <div className="flex justify-between items-start gap-4">
        
        <div className="flex flex-col gap-1">
          <h3 className={`font-semibold antialiased ${completedStyles}`}>
            {title}
          </h3>

          <span className={`text-md text-primary font-bold ${fonts.inconsolata.className} ${completedStyles}`}>
            {date}
          </span>
        </div>

        {/* <div
          className={`w-5 h-5 rounded-md border-2 flex items-center justify-center
          transition-all duration-200
          ${checked 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-400'}`}
        >
          {checked && (
            <div className="w-2.5 h-2.5 bg-white rounded-sm" />
          )}
        </div> */}

        
      </div>

      <p className={`text-sm leading-relaxed ${completedStyles || 'text-foreground/60'}`}>
        {desc}
      </p>
    </button>
    {/* <div className=''>
        <DropDown />
        </div> */}
    </>
  )
}

function DropDown(){
  const [open, setOpen] = useState<Boolean>(false)
  return(
    <div>
      {/* <div onClick={()=>{setOpen(!open)}}>
      <HiDotsHorizontal />
      </div> */}

    </div>
  )
}