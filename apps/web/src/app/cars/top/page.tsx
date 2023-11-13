import { oneDay } from "@car/utils";
import { Metadata } from "next";
import React from "react";
import { CarList } from "~/components/car-list";
import { api } from "~/trpc/server";

export const metadata: Metadata = {
  title: 'Top Cars',
}

// export const revalidate = oneDay

const getTopSellingCars = api.car.topSelling.query

const Page = async () => {
  const cars = await getTopSellingCars()

  return (
    <CarList initialCars={cars} fetchMore={getTopSellingCars} />
  )
}

export default Page;
