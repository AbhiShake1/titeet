import { TThemeProvider } from "@car/ui";
import "@car/ui/styles/globals.css";

import { cookies } from "next/headers";
import { ContextMenuProvider } from "~/components/context-menu-provider";
import { NavBar } from "~/components/nav-bar";
import { TRPCReactProvider } from "~/trpc/react";
import { Lato } from 'next/font/google'

const font = Lato({
  subsets: ['latin'],
  weight: "900"
})

export const metadata = {
  title: "Titeet",
  description: "Get your dream car without spending a fortune!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ContextMenuProvider>
          <TRPCReactProvider cookies={cookies().toString()}>
            <TThemeProvider attribute="class" defaultTheme="dark">
              <NavBar />
              {children}
            </TThemeProvider>
          </TRPCReactProvider>
        </ContextMenuProvider>
      </body>
    </html>
  );
}
