"use client";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useMemo, useCallback } from "react";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

export function QueryPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  
  const currentPage = useMemo(() => Number(searchParams.get("page")) || 1, [searchParams]);
  const previousPage = useMemo(() => currentPage - 1, [currentPage]);
  const nextPage = useMemo(() => currentPage + 1, [currentPage]);

  const createPageUrl = useCallback((pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  }, [searchParams, pathName]);

  return (
    <Pagination className={className}>
      <PaginationContent>
        {previousPage >= 1 && (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(previousPage)} />
          </PaginationItem>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem
            className="hidden sm:inline-block"
            key={`page-button-${index}`}
          >
            <PaginationLink
              isActive={currentPage === index + 1}
              href={createPageUrl(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {nextPage <= totalPages && (
          <PaginationItem>
            <PaginationNext href={createPageUrl(nextPage)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
