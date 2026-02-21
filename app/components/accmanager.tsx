'use client';
import React, { useState } from 'react'
import * as fonts from '@/app/font/fonts'
import {acc} from './SignUp'

type AccManagerProps = {
  cardtype: string
}


export default function Accmanager({ cardtype }: AccManagerProps) {
  const [lstype, setLstype] = useState<string | null>(null)
  
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

                <button className="mt-8 bg-primary/30 hover:bg-primary/40 transition p-3 rounded-xl font-medium cursor-pointer">
                    Log in
                </button>

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
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    name='email'
                    />

                    <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    className="w-full p-3 rounded-lg bg-primary/20 outline-none focus:ring-2 focus:ring-primary/40"
                    />
                </div>

                <input type='submit' className="mt-8 bg-primary/30 hover:bg-primary/40 transition p-3 rounded-xl font-medium cursor-pointer" placeholder='Sign Up'>
                    
                </input>

              </form>
                <small><button onClick={()=>{setLstype('Login')}} className='mt-5 cursor-pointer'>Already got a account? Click here to login</button></small>

                </div>
            )
            }

  return (
    <>
      <div
        onClick={() => setLstype('Signup')}
        className={`bg-primary p-2 text-sm rounded-xl ${fonts.cabin.className} cursor-pointer`}
      >
        Sign Up
      </div>

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



