'use client';
import React, { useState } from 'react';
import { IoSettings } from 'react-icons/io5';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useTheme } from 'next-themes';
import { ThemeToggle } from './ThemeToggle';

export default function Settings() {
  const [open, setOpen] = useState(!true);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <IoSettings
        onClick={() => setOpen(true)}
        cursor="pointer"
        className=" text-xl"
      />

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-md transition-all ">
          <div className="relative bg-primary/20  rounded-xl w-[50%] h-[70%] p-6 flex flex-col text-center transition-all">
            
            <button
              className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 rounded hover:bg-primary/20 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoIosArrowRoundBack size={20} /> Close
            </button>

            <h2 className="text-2xl font-bold mb-6">Settings</h2>

            <div className="flex flex-col gap-4 w-full items-center">
              {/* <span className="font-semibold text-lg">Select Theme</span> */}

              {/* <div className="flex gap-4 ">
                <button
                  className={`px-4 py-2 rounded ${
                    resolvedTheme === 'light'
                      ? 'bg-white text-black shadow-md'
                      : 'bg-gray-700 text-white'
                  }`}
                  onClick={() => setTheme('light')}
                >
                  Light
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    resolvedTheme === 'dark'
                      ? 'bg-black text-white shadow-md'
                      : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => setTheme('dark')}
                >
                  Dark
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    resolvedTheme === 'system'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-200 text-black'
                  }`}
                  onClick={() => setTheme('system')}
                >
                  System
                </button>
              </div> */}
              <span className='flex flex-row gap-10'><p>Theme:</p><ThemeToggle/></span>

              More Settings Coming Soon!
            </div>
          </div>
        </div>
      )}
    </>
  );
}