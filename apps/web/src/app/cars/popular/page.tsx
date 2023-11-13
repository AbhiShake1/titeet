import { oneDay } from "@car/utils";
import { Metadata } from "next";
import React from "react";
import { CarList } from "~/components/car-list";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: 'Popular Cars',
  description: 'Popular Cars',
}

// export const revalidate = oneDay

const getPopularCars = api.car.popular.query

const Page = async () => {
  const cars = await getPopularCars()

  return (
    <CarList initialCars={cars} fetchMore={getPopularCars} />
  )
}

export default Page;
