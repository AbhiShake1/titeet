"use client"

import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { TContextMenu } from "@car/ui";

export function ContextMenuProvider({ children }: { children: React.ReactNode }) {
  const { back, forward, refresh } = useRouter()
  const canGoBack = (() => {
    if (typeof window == 'undefined') return false
    // since 1 can be new tab
    return window.history.length > 2
  })()
  const canGoForward = useMemo(() => {
    if (typeof window == 'undefined') return false
    return window.history.length > window.history.state?.index + 1
  }, [])

  return <TContextMenu canGoBack={canGoBack} canGoForward={canGoForward} onBack={back} onReload={refresh}
    onForward={forward}>
    {children}
  </TContextMenu>
}
