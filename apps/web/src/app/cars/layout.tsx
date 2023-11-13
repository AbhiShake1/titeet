import React, { PropsWithChildren } from "react";
import { FilterCard } from "@car/ui";
import { SearchBar } from "~/components/search-bar";

export default function CarLayout({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col -mt-12'>
      <div className='flex flex-row justify-center sticky top-24 z-[998]'>
        <SearchBar />
      </div>
      <div className='flex flex-row space-x-6 px-8'>
        <aside className='flex-col space-y-4 pt-8 hidden lg:block border-r border-border pr-8'>
          <FilterCard title='Budget'>
            test
          </FilterCard>
          <FilterCard title='Brand + Model'></FilterCard>
          <FilterCard title='Premium Sellers'></FilterCard>
          <FilterCard title='Categories'></FilterCard>
          <FilterCard title='Model year'></FilterCard>
          <FilterCard title='KMs Driven'></FilterCard>
          <FilterCard title='Fuel Type'></FilterCard>
          <FilterCard title='Body Type'></FilterCard>
          <FilterCard title='Seats'></FilterCard>
          <FilterCard title='Transmission'></FilterCard>
          <FilterCard title='Ownership'></FilterCard>
          <FilterCard title='RTO'></FilterCard>
          <FilterCard title='Colors'></FilterCard>
        </aside>
        <div className='flex flex-col flex-1 pt-24'>
          <div className='grid grid-cols-1 gap-16 mx-auto lg:mx-0 md:grid-cols-3'>
            {children}
          </div>
          <div className='h-16' />
        </div>
      </div>
    </div>
  )
}
