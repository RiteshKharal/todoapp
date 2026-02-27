'use client';
import React, { useState, useEffect, ReactElement } from 'react'
import * as fonts from '@/app/font/fonts'
import {acc,logacc, getUser} from '../backend/SignUp'
import { MdAccountCircle } from "react-icons/md";
import { redirect } from 'next/navigation';


type AccManagerProps = {
  cardtype: string
}

type UserType = {
  id: string
  email: string
  name: string
  password: string
}

export default function Accmanager({ cardtype }: AccManagerProps) {
  

const [user, setUser] = useState<UserType | null>(null)
  const [lstype, setLstype] = useState<string | null>(null)
  const [out,setOut] = useState<ReactElement | null >(null)

  
    async function fetchUser() {
          const u = await getUser()
          if (u) setUser(u ?? null)
        }

  useEffect(() => {
    fetchUser()
  }, [])

  async function HandleSignSubmit(formdata: FormData) {
    const result = await acc(formdata);

    if (result && result.toLowerCase().includes('success')) {
      setLstype(null);
    }
    fetchUser()
    redirect('/')

  }
  async function HandleLogSubmit(formdata: FormData) {
    const result = await logacc(formdata);

    if (result && result.toLowerCase().includes('success')) {
      setLstype(null);
    }
    fetchUser()
    redirect('/')

  }


  
        function Login({ close }: { close: () => void }) {
            return (
                <div className="relative w-full max-w-md text-primary rounded-2xl p-8 flex flex-col bg-secondary">

                <button
                    onClick={close}
                    className="absolute top-4 left-4 text-sm opacity-70 hover:opacity-100 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-center mb-8">
                    Log onto Account
                </h2>

              <form action={HandleLogSubmit}>
                <div className="flex flex-col gap-5 flex-1">
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg outline-none focus:ring-1 focus:ring-primary/10 border border-border"
                    name='email'
                    required
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    className="w-full p-3 rounded-lg  outline-none focus:ring-1 focus:ring-primary/10 border border-border"
                    required
                    />
                </div>

                <button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground transition p-3 rounded-xl font-medium cursor-pointer" type='submit'>
                    Log in
                </button>
                </form>

                <small className='mt-5 '><button onClick={()=>{setLstype('SignUp')}} className='cursor-pointer'>Already got a account? Click here to login</button></small>

                </div>
            
            )
        }

        function Signup({ close }: { close: () => void }) {
            return (
                <div className="relative w-full max-w-md text-primary rounded-2xl p-8 flex flex-col bg-secondary">

                <button
                    onClick={close}
                    className="absolute top-4 left-4 text-sm opacity-70 hover:opacity-100 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-center mb-8">
                    Create Account
                </h2>

                <form action={HandleSignSubmit}>

                <div className="flex flex-col gap-5 flex-1">
                  <input
                  type="text"
                  name="name"
                  placeholder="Username"
                  className="w-full p-3 rounded-lg text-foreground outline-none focus:ring-2 focus:ring-primary/10 transition-all border-border"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-3 rounded-lg text-foreground outline-none focus:ring-1 focus:ring-primary/10 transition-all border border-border" 
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3 rounded-lg text-foreground outline-none focus:ring-2 focus:ring-primary/10 transition-all"
                />
                </div>

                <button type='submit' className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 transition p-3 rounded-xl font-medium cursor-pointer" >
                    Sign Up
                </button>

              </form>
                <small><button onClick={()=>{setLstype('Login')}} className='mt-5 cursor-pointer'>Already got a account? Click here to login</button></small>

                </div>
            )
        }
        
        
        function options() {
  user
    ? setOut(
        <div
          className={`
            flex items-center gap-2
            rounded-2xl
            backdrop-blur-md
            transition-all duration-200
            cursor-pointer
            ${fonts.comfortaa.className}
          `}
        >
          <MdAccountCircle className="text-2xl text-primary" />
          <span className="text-[1rem] font-medium">
            {user.name}
          </span>
        </div>
      )
    : setOut(
        <div
          onClick={() => setLstype("Signup")}
          className={`
            rounded-2xl
            text-primary
            text-sm font-semibold
            hover:shadow-lg
            hover:scale-105
            transition-all duration-200
            cursor-pointer
            ${fonts.cabin.className}
          `}
        >
          Sign Up
        </div>
      );
}

        useEffect(options,[user])  


  return (
    <>

    

      {out}

      {lstype && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm">
          {lstype === 'Login'
            ? <Login close={() => setLstype(null)} />
            : <Signup close={() => setLstype(null)} />
          }
        </div>
      )}
    </>
  )
}
