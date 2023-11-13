"use client"

import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuShortcut, ContextMenuTrigger, } from "./ui"
import { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode
  onBack: () => void
  onForward: () => void
  onReload: () => void
  canGoBack: boolean
  canGoForward: boolean
}

export const TContextMenu: FunctionComponent<Props> = (props) => {
  const { children, onBack, onForward, onReload, canGoBack, canGoForward } = props
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset disabled={!canGoBack} onClick={onBack}>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled={!canGoForward} onClick={onForward}>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset onClick={onReload}>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
