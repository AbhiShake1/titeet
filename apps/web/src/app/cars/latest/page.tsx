import { Metadata } from "next";
import { oneDay } from "@car/utils";
import React from "react";
import { api } from "~/trpc/server";
import { CarList } from "~/components/car-list";

export const metadata: Metadata = {
  title: 'Latest Cars',
  description: 'Latest Cars',
}

// export const revalidate = oneDay

const getLatestCars = api.car.latest.query

const Page = async () => {
  const cars = await getLatestCars()

  return (
    <CarList initialCars={cars} fetchMore={getLatestCars} />
  )
}

export default Page;
