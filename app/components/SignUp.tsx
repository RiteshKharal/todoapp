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

let user;

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
    const Email = formdata.get('email')?.toString() || ''
  const pass = formdata.get('password')?.toString() || ''


    user = await  prisma.user.findUnique({
      where:{
        email: Email,
      }
    })

    if (!user) return;

  const PassMatch =await bcrypt.compare(pass,user.password)

  if(!PassMatch) return;

  (await cookies()).set('UID', user.id)

  // return user;
  
}

export async function getUser(){
  const usid= (await cookies()).get('UID')?.value

  if (!usid) return;

  return prisma.user.findUnique({
    where:{
      id:usid
    }
  })
}


