"use client"

import { DependencyList, useLayoutEffect, useState } from 'react';

export function useAfterLayoutEffect(
  effect: () => void,
  deps: DependencyList = [],
  dispose?: () => void,
) {
  const [isFirstRender, setIsFirstRender] = useState(true)

  useLayoutEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false)
    } else {
      effect()
    }
    dispose?.call(undefined)
  }, deps)
}
