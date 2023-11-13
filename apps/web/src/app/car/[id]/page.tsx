import React, { ReactElement } from "react";
import { threeDays } from "@car/utils";
import { Button, TCard } from "@car/ui";
import Image from 'next/image'
import { api } from "~/trpc/server";

interface Props {
  params: {
    id: string
  }
}

// export const revalidate = threeDays

export const generateStaticParams = async () => {
  const cars = await api.car.findAll.query();
  return cars.map(({ id }) => ({ id }))
}

const Page = async ({ params: { id } }: Props) => {
  const { model, price, imageUrl } = await api.car.findOne.query({ id })

  return <div className='flex flex-col space-y-8 mx-4 mt-12'>
    <div className='flex flex-row justify-between'>
      <h1 className="text-3xl font-extrabold tracking-tight">
        {model}
      </h1>
      <div className='flex flex-row space-x-12'>
        <h1 className="text-3xl font-extrabold tracking-tight">
          Rs.{price}
        </h1>
        <Button variant='secondary'>Calculate EMI</Button>
      </div>
    </div>
    <TCard>
      <Image src={imageUrl ?? ""} alt={model ?? ""} width={312} height={312} />
    </TCard>
  </div>
}

Page.getLayout = (page: ReactElement) => <div className='bg-red-400'>{page}</div>

export default Page
