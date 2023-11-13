import React from "react";
import { CarLoadingSkeleton } from "@car/ui";

export default function Loading() {
  return (
    Array.from({ length: 12 }).map((_, idx) => (
      <CarLoadingSkeleton key={idx} />
    ))
  )
}
