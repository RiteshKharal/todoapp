'use server';
import React from 'react'
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { redirect } from 'next/navigation';
import { getUser } from '../components/SignUp';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});
const user = await getUser() ?? null 


export default async function TaskManager(formdata : FormData) {
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
}

export async function UserTasks() {
    if(!user) return null;
  

  const tasks = await prisma.task.findMany({
    where: { 
        userId:user.id,
        
     },
    orderBy: { 
        date: 'asc' 
    },
  });

  return tasks;
}
