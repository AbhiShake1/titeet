"use client"

import { useEffect, useState, useRef } from 'react';

export function useDebouncedValue<T>(value: T, wait = 500) {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeoutRef = useRef<number | null>(null);

  const cancel = () => window.clearTimeout(timeoutRef.current!);

  useEffect(() => {
    if (mountedRef.current) {
      cancel();
      timeoutRef.current = window.setTimeout(() => {
        setValue(value);
      }, wait);
    }
  }, [value, wait]);

  useEffect(() => {
    mountedRef.current = true;
    return cancel;
  }, []);

  return [_value, cancel] as const;
}
