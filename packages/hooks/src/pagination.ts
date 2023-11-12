import { useState } from "react";

type Props = {
  initialPage?: number
}

export function usePagination({ initialPage = 0 }: Props = {}) {
  const [page, setPage] = useState(initialPage)

  const nextPage = () => setPage(p => p + 1)

  return { page, nextPage }
}
