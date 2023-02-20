import React from "react";

interface PaginateProps {
  currentPage: number;
  usersPerPage: number;
  totalUsers: number;
  onPageChange: (pageNumber: number) => void;
}

const Paginate = (props: PaginateProps) => {
  const { currentPage, usersPerPage, totalUsers, onPageChange } = props;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers.map((number) => (
        <button key={number} onClick={() => onPageChange(number)} disabled={currentPage === number}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default Paginate;
