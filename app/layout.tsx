import type { Metadata } from "next";

import "./globals.css";
import { ThemeProviderWrapper } from "./providers/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import * as fonts  from './fonts' 



export const metadata: Metadata = {
  title: "ToDoar",
  description: "The most Customizable To Do app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` antialiased ${fonts.geistMono.className}`}
      >

        <ThemeProviderWrapper>
          {
          children
          }
          </ThemeProviderWrapper>
      </body>
    </html>
  );
}
