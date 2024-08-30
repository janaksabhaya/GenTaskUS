import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-[#E3EAF1] px-4 py-3 sm:px-6 sticky bottom-0 z-50" style={{ boxShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.13)' }}>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <p className="text-base text-[#495057]">
          Showing <span className="font-medium">{(currentPage - 1) * 10 + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(currentPage * 10, totalPages * 10)}
          </span>{' '}
          of <span className="font-medium">{totalPages * 10}</span> results
        </p>
        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm h-[31px]">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <i className="bi bi-chevron-left h-5 w-5"></i>
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              aria-current={currentPage === index + 1 ? 'page' : undefined}
              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === index + 1
                  ? 'bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            disabled={currentPage === totalPages}
          >
            <span className="sr-only">Next</span>
            <i className="bi bi-chevron-right h-5 w-5"></i>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
