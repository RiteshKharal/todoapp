'use client'
import React, { useState, useEffect } from 'react'
import * as fonts from '../font/fonts'
import { FiChevronDown, FiCheck } from 'react-icons/fi'
import { HiDotsHorizontal } from "react-icons/hi";
import TaskManager, { UserTasks } from "../backend/TaskManager";
import { IoCheckmarkCircleOutline, IoEllipsisHorizontal } from 'react-icons/io5';


type TaskCardProps = {
  title: string
  desc: string
  date: string
  read: boolean
}


export function TaskCard({ title, desc, date, read }: TaskCardProps) {
  const [checked, setChecked] = useState(read ?? false)
  const completed = checked
  const hasDesc = Boolean(desc)

  return (
    <button
      type="button"
      onClick={() => setChecked(prev => !prev)}
      aria-pressed={checked}
      title="Mark as Done"
      className={`
        w-full rounded-2xl px-5 py-5
        min-h-20
        transition-all duration-300 ease-out
        border backdrop-blur-sm
        active:scale-102
        focus:outline-none cursor-pointer
        ${completed
          ? "bg-primary/15 border-primary/10"
          : "bg-foreground/5 border-foreground/7 hover:bg-foreground/10"
        }
        text-center
      `}
    >
      <div className={`relative flex flex-col
        ${hasDesc ? "gap-3" : "items-center gap-2"}`}
      >
        <h3
          className={`
            font-semibold tracking-tight
            transition-all duration-300
            ${completed ? "line-through text-foreground/40" : "text-foreground"}
            ${hasDesc ? "text-lg" : "text-2xl"}
            ${fonts.quicksand.className}
          `}
        >
          {title}
        </h3>

        {hasDesc && (
          <p
            className={`
              text-sm leading-relaxed
              ${completed ? "line-through text-foreground/30" : "text-foreground/70"}
            `}
          >
            {desc}
          </p>
        )}

        <div
          className={`
            absolute bottom-4 right-4
            bg-primary/10 text-primary
            px-3 py-1
            rounded-full
            text-xs font-semibold
            ${completed ? 'text-primary/50 bg-primary/20' : ''}
          `}
        >
          {date}
        </div>
      </div>
    </button>
  )
}


type TasksType = {
  id: number
  title: string
  description: string | null
  date: string
  read: boolean
}


export function Task() {
  const [tasks, setTasks] = useState<TasksType[] | null>(null)
  
  useEffect(() => {
      UpdateTasks();
    }, [])

  async function UpdateTasks() {
    const t = await UserTasks()
    if (t) setTasks(t ?? null)
  }

  function TaskForm() {

    async function HandleTask(formdata: FormData) {
      const result = await TaskManager(formdata)
      if (result && result.toLowerCase().includes('success')) {
        UpdateTasks()
      }
    }

    return (
      <form className="flex flex-col gap-5" action={HandleTask}>
        <input
          type="text"
          name="TaskTitle"
          placeholder="Task"
          className="p-2 border border-border rounded-sm"
          required
        />

        <textarea
          name="TaskDesc"
          placeholder="Task Description"
          className="p-2 resize-none border border-border rounded-sm"
          rows={4}
        />

        <div className="w-full flex justify-between items-center">
          <input
            type="date"
            name="TaskDueTime"
            placeholder="Task Due time"
            className="p-2 bg-primary2 rounded-xl cursor-pointer"
            min={new Date().toISOString().split("T")[0]}
            defaultValue={new Date().toISOString().split("T")[0]}
          />
          <input
            type="submit"
            className={`p-3 bg-primary rounded-xl ${fonts.geistMono.className} text-background cursor-pointer hover:bg-primary/90`}
          />
        </div>
      </form>
    )
  }

  function TasksSection() {

    

    return (
      <section className="flex flex-col gap-5">
        {tasks &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              title={task.title}
              desc={task.description || ''}
              date={task.date}
              read={task.read}
            />
          ))
        }
      </section>
    )
  }

  return (
    <>
      {/* Task INPUT TAKING SECTION */}
      <section className="w-full mt-[10%]">
        <TaskForm />
      </section>

      <section className="mt-[10%] w-full mb-[10%]">
        <h1 className={`text-2xl ${fonts.lilitaOne.className} mb-[2%]`}>Tasks</h1>
        <TasksSection />
      </section>
    </>
  )
}


function DropDown() {
  const [open, setOpen] = useState<Boolean>(false)
  return (
    <div>
      {/* <div onClick={()=>{setOpen(!open)}}>
          <HiDotsHorizontal />
      </div> */}
    </div>
  )
}