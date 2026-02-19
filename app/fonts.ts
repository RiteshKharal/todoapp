/* eslint-disable @typescript-eslint/no-unused-vars */
import { Josefin_Sans, Righteous, Smooch_Sans, Kalam } from 'next/font/google';
import { Lilita_One } from 'next/font/google';
import { Geist, Geist_Mono } from "next/font/google";

const AllFonts = [
    'josefin',
    'righteous',
    'smooch',
    'lilitaOne',
    'kalam'
]

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const lilitaOne = Lilita_One({
  subsets: ['latin'], 
  weight: ['400'],      
  variable: '--font-lilita', 
});

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100','400','700'] 
});

export const righteous = Righteous({
  subsets: ['latin'],
  weight: ['400']     
});

export const smooch = Smooch_Sans({
  subsets: ['latin'],
  weight: ['100','900'] 
});


export  const kalam = Kalam({
  subsets: ['latin'],
  weight: ['400','700'],  // choose weights you want
  variable: '--font-kalam'
});

