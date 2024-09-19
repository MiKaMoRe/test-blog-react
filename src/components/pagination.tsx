import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  page: number;
  pageTotalCount: number;
  isLoading: boolean
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PaginationComponent({
  page,
  pageTotalCount,
  isLoading,
  setPage,
}: PaginationProps) {
  if (isLoading){
    return <></>
  }
  return (
    <Pagination className="py-5">
      <PaginationContent>
        {page != 0 && (
          <PaginationItem>
            <PaginationPrevious
              href="/"
              onClick={() => setPage(page - 1 > 0 ? page - 1 : 0)}
            />
          </PaginationItem>
        )}
        {/* <PaginationItem>
        <PaginationLink href="/" >1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem> */}
        {page != pageTotalCount && (
          <PaginationItem>
            <PaginationNext
              href="/"
              onClick={() => setPage(page + 1 > 0 ? page + 1 : 0)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
