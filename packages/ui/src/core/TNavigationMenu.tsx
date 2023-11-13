"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "../utils/tw-utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger, navigationMenuTriggerStyle
} from "./ui";
import { useSearchParams } from 'next/navigation'

export function TNavigationMenu() {
  const search = useSearchParams()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>BUY A CAR</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href={`/cars/popular?${search}`} title="Popular">
                Most browsed cars of all time
              </ListItem>
              <ListItem href={`/cars/top?${search}`} title="Top Rated">
                Best user feedbacks
              </ListItem>
              <ListItem href={`/cars/latest?${search}`} title="Latest">
                Latest arrivals
              </ListItem>
              <ListItem href={`/cars?${search}`} title="Our Recommendations">
                Teeteet's recommendations
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>SELL A CAR</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/cars/sell" title="Sell Your Car">
                Sell your used car at best value
              </ListItem>
              <ListItem href="/cars/resell-value" title="Get Resell Value">
                Sell your car at the best possible price
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/cars/finance" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              CAR FINANCE
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href = '/', title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
