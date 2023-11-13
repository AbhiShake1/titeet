import { InfoCard, Button } from "@car/ui";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TeeTeet',
  description: 'TeeTeet Buy, Sell, Resell, Car',
}

const Index = async () => {
  // const [coords, setCoords] = useState<GeolocationCoordinates | null>(null)
  //
  // useEffect(() => {
  //     navigator.geolocation.watchPosition(({coords}) => {
  //         setCoords(coords)
  //     })
  //     return () => navigator.geolocation.clearWatch(1)
  // }, [])
  // bg-[url(/bg.png)]
  return (
    <main
      className='flex flex-col items-start p-16 bg-cover bg-no-repeat mix-blend-difference h-[90vh]'>
      <div className='max-w-[40vw] space-y-4'>
        <h3 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-5xl lg:leading-snug leading-snug">
          Your ultimate destination to find affordable cars!
        </h3>
        <h3 className="scroll-m-20 text-2xl font-semibold text-muted-foreground leading-snug">
          Embrace Value and Variety - Explore an Array of Pre-Owned Cars with Distinctive Features!
        </h3>
        <div className='flex flex-row space-x-8 pt-8'>
          <Button size='lg'>Buy Now</Button>
          <Button size='lg' className='scale-110' variant='outline'>Explore</Button>
        </div>
      </div>
      <div className='flex-1' />
      <div className='w-full flex flex-col items-end justify-end'>
        <div className='flex-shrink md:hidden lg:block'>
          <InfoCard />
        </div>
      </div>
      {/*{coords?.latitude} {coords?.longitude}*/}
      {/*<CreateAccountForm/>*/}
    </main>
  );
}

export default Index
