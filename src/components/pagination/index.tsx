import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PaginationProps } from "@/types/interface";
import { getPageNumbers } from "./../../lib/getNumbers";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <nav className="flex items-center justify-center mt-8">
      <ul className="flex items-center gap-2">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 h-10 rounded-lg border border-gray-700 bg-gray-800/50 
                     text-gray-400 hover:bg-gray-700 hover:text-white 
                     disabled:opacity-50 disabled:hover:bg-gray-800/50 
                     disabled:hover:text-gray-400 transition-all duration-300"
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
        </li>

        {getPageNumbers({ currentPage, totalPages }).map((page, index) => (
          <li key={index}>
            <button
              onClick={() =>
                typeof page === "number" ? onPageChange(page) : null
              }
              disabled={page === "..."}
              className={`min-w-[40px] h-10 px-4 rounded-lg border 
                   ${
                     page === currentPage
                       ? "bg-teal-500/20 text-teal-400 border-teal-500/50 font-medium"
                       : "border-gray-700 bg-gray-800/50 text-gray-400 hover:bg-gray-700 hover:text-white"
                   } 
                   disabled:hover:bg-transparent disabled:hover:text-gray-400
                   transition-all duration-300`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 h-10 rounded-lg border border-gray-700 bg-gray-800/50 
                     text-gray-400 hover:bg-gray-700 hover:text-white 
                     disabled:opacity-50 disabled:hover:bg-gray-800/50 
                     disabled:hover:text-gray-400 transition-all duration-300"
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
