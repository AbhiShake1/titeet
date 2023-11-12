"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from "react";
import { Button } from "./ui";

type Props = FunctionComponent<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>

export const TDarkModeToggle: Props = ({ ...props }) => {
  const { theme } = useTheme()

  return (
    <div {...props}>
      {theme == 'dark' ? <LightModeToggle /> : <DarkModeToggle />}
    </div>
  )
}

const DarkModeToggle = () => {
  const { setTheme } = useTheme()
  return <Button variant='ghost' onClick={() => setTheme('dark')}>
    <SunIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
  </Button>
}

const LightModeToggle = () => {
  const { setTheme } = useTheme()
  return <Button variant='ghost' onClick={() => setTheme('light')}>
    <MoonIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
  </Button>
}
