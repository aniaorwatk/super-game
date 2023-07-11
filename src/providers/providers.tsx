"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

type IProviderType = {
  children: React.ReactNode;
};

export default function Providers({ children }: IProviderType) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.getItem("theme");
    }
  }, []);
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
