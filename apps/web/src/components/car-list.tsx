"use client"

import React, { useState } from "react";
import { CarLoadingSkeleton, GridTileImage, TCard } from "@car/ui";
import Link from "next/link";
import { PaginatedRequest } from "@car/api";
import { useSearchParams } from "next/navigation";
import { useAfterLayoutEffect, useDebouncedValue, useIntersection, usePagination } from "@car/hooks";

type Props = {
  initialCars: cars[]
  fetchMore: (req: PaginatedRequest) => Promise<Car[]>
}

export const CarList: React.FC<Props> = ({ initialCars, fetchMore }) => {
  const [cars, setCars] = useState(initialCars)
  const { page, nextPage } = usePagination()
  const [canLoadMore, setCanLoadMore] = useState(true)

  const search = useSearchParams().get('model') ?? ''
  const [debouncedSearch] = useDebouncedValue(search)

  useAfterLayoutEffect(async () => {
    setCanLoadMore(true)
    const res = await fetchMore({ search: debouncedSearch })
    if (res.length > 0) {
      setCars(res)
    }
  }, [debouncedSearch])

  const { ref } = useIntersection({
    async onIntersect() {
      if (!canLoadMore) return
      const cars = await fetchMore({ page: page + 1, search: debouncedSearch })
      if (cars.length == 0) setCanLoadMore(false)
      setCars(c => [...c, ...cars])
      nextPage()
    }
  })

  return ([
    ...cars.map(({ id, model, price, imageUrl }) => (
      <TCard key={id}>
        <Link href={`/car/${id}`}
          className='relative flex flex-col items-center gap-4 duration-700 group h-[30vh] w-[80vw] lg:w-[30vw]'>
          <GridTileImage
            isInteractive
            alt={model}
            label={{
              title: model,
              amount: Number(price).toString(),
              currencyCode: 'NRS'
            }}
            src={imageUrl}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
        </Link>
      </TCard>
    )),
    canLoadMore && <>{Array.from({ length: 3 }).map((_, i) => <div ref={ref} key={i}><CarLoadingSkeleton /></div>)}</>,
  ])
}
