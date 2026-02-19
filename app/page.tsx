import Image from "next/image";
import {ThemeToggle} from './components/ThemeToggle'
import * as fonts from './fonts'

export default function Home() {
        console.log(new Date().getDate())

  return (
    <div className="flex items-center justify-center  font-sans bg-background">
      <main className="flex w-full max-w-3xl flex-col items-center justify-between p-10  sm:items-start">

        <nav className="top-10 flex justify-between w-full ">

          <div className={`text-xl ${fonts.lilitaOne.className}`} >
            ToDoar
          </div>

          <div>

          <div><ThemeToggle></ThemeToggle></div>


         </div>
        </nav>
      

      {/* INPUT TAKING SECTION */}
      <section className=" w-full mt-[10%] ">
        <form className="flex flex-col gap-5"> {/* NEED TO ADD THE DB ADD LATER, TO DO 😀😀 */}

        <input type="text" name="TaskTitle" placeholder="Task" className="p-2 border border-border rounded-sm" required/>

        <textarea  name="TaskDesc" placeholder="Task Description" className=" p-2 resize-none border border-border rounded-sm" rows={4} />

        <div className="w-full justify-between flex items-center">

        <input type="date" name="TaskDueTime" placeholder="Task Due time " className="p-2 bg-primary2 rounded-xl " min={new Date().toISOString().split("T")[0]}/>
        <input type="submit" className={`p-3 bg-primary rounded-xl ${fonts.geistMono.className } cursor-pointer`} />

        </div>

        </form>
      </section>


      <section className="mt-[10%]">
        <h1 className={`text-2xl ${fonts.lilitaOne.className}`}> Tasks</h1>
      </section>
        
      </main>
    </div>
  );
}
