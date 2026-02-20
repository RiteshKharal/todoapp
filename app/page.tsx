import Image from "next/image";
import {ThemeToggle} from './components/ThemeToggle'
import * as fonts from './font/fonts'
import TaskCard from "./components/TaskCard";
import Settings from './components/Settings';

export default function Home() {
  return (
    <div className="flex items-center justify-center  font-sans">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between p-10  sm:items-start">

        <nav className="top-10 flex justify-between w-full ">

          <div className={`text-xl ${fonts.lilitaOne.className}`} >
            Tudor
          </div>

          <div>

          <div className="flex flex-row gap-5">
            <Settings/>
            <ThemeToggle/>
            </div>
         </div>
        </nav>
      

      {/* INPUT TAKING SECTION */}
      <section className=" w-full mt-[10%] ">
        <form className="flex flex-col gap-5"> {/* NEED TO ADD THE DB ADDings LATER, TO DO 😀😀 */}

        <input type="text" name="TaskTitle" placeholder="Task" className="p-2 border border-border rounded-sm" required/>

        <textarea  name="TaskDesc" placeholder="Task Description" className=" p-2 resize-none border border-border rounded-sm" rows={4} />

        <div className="w-full justify-between flex items-center">

        <input type="date" name="TaskDueTime" placeholder="Task Due time " className="p-2 bg-primary2 rounded-xl cursor-pointer " min={new Date().toISOString().split("T")[0]}/>
        <input type="submit" className={`p-3 bg-primary rounded-xl ${fonts.geistMono.className } cursor-pointer hover:bg-primary/90`} />

        </div>

        </form>
      </section>


      <section className="mt-[10%] w-full mb-[10%]">
        <h1 className={`text-2xl ${fonts.lilitaOne.className} mb-[2%]`}> Tasks</h1>
        <TaskCard title="Wash the dishes" desc="Wash the dishes from new york properly and on time" date="2029-19-36"/>

      </section>
        
      </main>
    </div>
  );
}
