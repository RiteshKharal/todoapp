'use server';

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});

const CookieStore= await cookies()


type acctypes = {
  email:string,
  password: string
}


export async function acc(formdata: FormData){

  const Email = formdata.get('email')?.toString() || ''
  const pass = formdata.get('password')?.toString() || ''
  const name = formdata.get('name')?.toString() || ''

  const PHash = await bcrypt.hash(pass,10)

    await prisma.user.create({
      data:{
        name:name,
        email: Email,
        password: PHash
      }
    })

    logacc(formdata)

}

 export async function logacc(formdata: FormData){

    const Email = formdata.get('email')?.toString()
  const pass = formdata.get('password')?.toString()


    const user = await  prisma.user.findUnique({
      where:{
        email: Email,
      }
    })
    if (!user) return;

  if (!pass) return;

  const PassMatch =await bcrypt.compare(pass,user.password)
  if(!PassMatch) return;

   CookieStore.set('UID', user.id,{
    secure:true,
    maxAge:60*60*24*9,
    httpOnly:true,
    path:'/',
  })

  redirect('/')

  
}

export async function getUser(){
  const usid= CookieStore.get('UID')?.value

  if (!usid) return null;

  const u = prisma.user.findUnique({
    where:{
      id:usid
    }
  })

  return u
}


