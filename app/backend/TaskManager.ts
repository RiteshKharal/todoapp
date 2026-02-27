'use server';

import React from 'react'
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';
import { getUser } from './SignUp';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});

export default async function TaskManager(formdata : FormData) {
    const user = await getUser();
    const Task = formdata.get('TaskTitle')?.toString()
    const TaskDesc = formdata.get('TaskDesc')?.toString() || null 
    const TaskDate = formdata.get('TaskDueTime')?.toString()

    if (!Task || !TaskDate || !user) return;

    await prisma.task.create({
        data:{
            title: Task,
            description: TaskDesc,
            date:TaskDate,
            userId: user.id
        }

    })

    return 'Success'
    
}

export async function UserTasks() {
    const user = await getUser();
    if(!user) return null;

  const tasks = await prisma.task.findMany({
    where: { 
        userId:user.id,
        
     },
    orderBy: [
        {read:'asc'},
        {date: 'desc'},
        
    ],
  });

  return tasks;
}

export async function ToggleTask(TaskID: number, state: boolean) {
    const user = await getUser();
    if(!user) return null;

    const crnttask = await prisma.task.findFirst({
        where:{
            userId:user.id,
            id:TaskID
        }
    })

    if(!crnttask) return

  await prisma.task.update({
    where:{
        id:TaskID
    },
    data:{
        read: state,
    }
  });

}
