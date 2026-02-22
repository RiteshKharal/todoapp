'use client';
import React, { useState, useEffect } from 'react'
import * as fonts from '@/app/font/fonts'
import {acc,logacc, getUser} from './SignUp'


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

  
    async function fetchUser() {
          const u = await getUser()
          if (u) setUser(u ?? null)
        }

  useEffect(() => {
    
    fetchUser()
  }, [])


  
        function Login({ close }: { close: () => void }) {
            return (
                <div className="relative w-full max-w-md bg-primary rounded-2xl p-8 flex flex-col">

                <button
                    onClick={close}
                    className="absolute top-4 left-4 text-sm opacity-70 hover:opacity-100 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-center mb-8">
                    Log onto Account
                </h2>

              <form action={logacc}>
                <div className="flex flex-col gap-5 flex-1">
                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>

                <button className="mt-8 bg-primary/30 hover:bg-primary/40 transition p-3 rounded-xl font-medium cursor-pointer" type='submit'>
                    Log in
                </button>
                </form>

                <small className='mt-5 '><button onClick={()=>{setLstype('SignUp')}} className='cursor-pointer'>Already got a account? Click here to login</button></small>

                </div>
            
            )
        }

        function Signup({ close }: { close: () => void }) {
            return (
                <div className="relative w-full max-w-md bg-primary rounded-2xl p-8 flex flex-col">

                <button
                    onClick={close}
                    className="absolute top-4 left-4 text-sm opacity-70 hover:opacity-100 cursor-pointer"
                >
                    ✕
                </button>

                <h2 className="text-xl font-semibold text-center mb-8">
                    Create Account
                </h2>

                <form action={acc}>

                <div className="flex flex-col gap-5 flex-1">
                  <input
                    type="text"
                    placeholder="Username"
                    name='name'
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    required
                    />

                    <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    name='email'
                    required
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    required
                    />
                </div>

                <button type='submit' className="mt-8 bg-primary/30 hover:bg-primary/40 transition p-3 rounded-xl font-medium cursor-pointer" >
                    Sign Up
                </button>

              </form>
                <small><button onClick={()=>{setLstype('Login')}} className='mt-5 cursor-pointer'>Already got a account? Click here to login</button></small>

                </div>
            )
        }
        
        function options(){
          return user ? (
    <div
      className={`bg-primary p-2 text-sm rounded-xl ${fonts.cabin.className} cursor-pointer`}
    >
      {user.name}
    </div>
  ) : (
    <div
      onClick={() => setLstype('Signup')}
      className={`bg-primary p-2 text-sm rounded-xl ${fonts.cabin.className} cursor-pointer`}
    >
      Sign Up
    </div>
  );
          

        }

        // useEffect(options,[user])


  return (
    <>

    

      {options()}

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
