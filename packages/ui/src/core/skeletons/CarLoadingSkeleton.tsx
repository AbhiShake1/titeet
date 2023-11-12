import { TCard } from "../TCard";
import { Skeleton } from "../ui";
import PriceLabel from "../PriceLabel";

export function CarLoadingSkeleton() {
  return (
    <TCard>
      <Skeleton className='h-[30vh]'>
        <Skeleton>
          <PriceLabel
            title={'Loading Car'}
            amount={'80000'}
            currencyCode={'NRS'}
          />
        </Skeleton>
      </Skeleton>
    </TCard>
  )
}
