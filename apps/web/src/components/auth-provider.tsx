import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider appearance={{
    // baseTheme: theme == 'dark' ? dark : undefined,
  }}>
    {children}
  </ClerkProvider>
}
