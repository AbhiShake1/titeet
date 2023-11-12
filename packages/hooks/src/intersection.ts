"use client"

import { useCallback, useLayoutEffect, useRef, useState } from 'react';

type Options = ConstructorParameters<typeof IntersectionObserver>[1] & {
  onIntersect?: () => void
}

export function useIntersection<T extends HTMLElement>(
  { threshold = .2, ...options }: Options = {}
) {
  const _options = { ...options, threshold }
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>();

  const observer = useRef<IntersectionObserver | null>();

  const ref = useCallback(
    (element: T | null) => {
      if (observer.current) {
        observer.current.disconnect()
        observer.current = null
      }

      if (!element) return setEntry(null)

      observer.current = new IntersectionObserver(([_entry]) => {
        setEntry(_entry ?? null)
      }, _options)

      observer.current.observe(element)
    },
    [_options.rootMargin, _options.root, _options.threshold]
  )

  useLayoutEffect(() => {
    if (entry?.isIntersecting) {
      _options.onIntersect?.call(undefined)
    }
  }, [entry?.isIntersecting])

  return { ref, entry }
}
