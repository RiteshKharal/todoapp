'use server';

import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcrypt'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({adapter});

type acctypes = {
  email:string,
  password: string
}

let user;

export async function acc(formdata: FormData){

  const Email = formdata.get('email')?.toString() || ''
  const pass = formdata.get('password')?.toString() || ''

  const PHash = await bcrypt.hash(pass,10)

    await prisma.user.create({
      data:{
        email: Email,
        password: PHash
      }
    })

    logacc(formdata)

}

export async function logacc(formdata: FormData){
    const Email = formdata.get('email')?.toString() || ''
  const pass = formdata.get('password')?.toString() || ''

  const PHash = await bcrypt.hash(pass,10)

    user = await  prisma.user.findFirst({
      where:{
        email: Email,
        password: PHash
      }
    })
}

