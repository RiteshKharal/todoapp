"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      value={{
        light: "light",
        dark: "dark",
        blue: "blue",
        red:'red',
      }}
    >
      {children}
    </ThemeProvider>
  );
}