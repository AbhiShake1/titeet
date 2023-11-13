"use client"

import React from "react";
import { TCard } from "./TCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui";

type Props = {
  title: string
  children?: React.ReactNode
}

export function FilterCard({ title, children }: Props) {
  return (
    <TCard className='px-4 pb-2 text-center'>
      <Accordion type='single' collapsible>
        <AccordionItem value=''>
          <AccordionTrigger>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              {title}
            </h2>
          </AccordionTrigger>
          <AccordionContent>{children}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </TCard>
  )
}
