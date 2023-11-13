import { Metadata } from "next";
import React from "react";
import { CarList } from "../../components/car-list";
import { oneDay } from "@car/utils";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: 'Cars',
  description: 'Cars',
}

// export const revalidate = oneDay

const getRecommendedCars = api.car.recommended.query

const Page = async () => {
  const cars = await getRecommendedCars()

  return (
    <CarList initialCars={cars} fetchMore={getRecommendedCars} />
  )
}

export default Page;
