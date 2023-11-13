"use client"

import { Input } from "@car/ui";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchBar() {
  const { replace } = useRouter()
  const path = usePathname()
  const search = useSearchParams()

  const setSearchParams = (search: string) => {
    let query = ""
    if (search.length > 0) {
      query = `?model=${search}`
    }
    replace(`${path}${query}`, { scroll: false })
  }

  return (
    <Input defaultValue={search.get('model') ?? ''} placeholder='Search by Model'
      onChange={e => setSearchParams(e.target.value)}
      className='max-w-xs bg-transparent backdrop-blur-3xl' />
  )
}
