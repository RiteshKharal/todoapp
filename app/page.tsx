import Image from "next/image";
import {ThemeToggle} from './components/ThemeToggle'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans bg-background">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16   sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <ThemeToggle></ThemeToggle>
        <span className="text-foreground">test</span>
      </main>
    </div>
  );
}
