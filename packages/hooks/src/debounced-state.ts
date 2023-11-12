"use client"

import { useEffect, useRef, useState } from 'react';

export function useDebouncedState<T>(
  defaultValue: T,
  wait = 500,
) {
  const [value, setValue] = useState(defaultValue)
  const timeoutRef = useRef<number | null>(null)

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!)
  useEffect(() => clearTimeout, [])

  const debouncedSetValue = (newValue: T) => {
    clearTimeout()
    timeoutRef.current = window.setTimeout(() => setValue(newValue), wait)
  }

  return [value, debouncedSetValue] as const
}
