import React from 'react'
import { Pagination as BootstrapPagination } from "react-bootstrap";
import plusle from "../assets/plusle.gif";
import minun from "../assets/minun.gif";
const Pagination = ({ lastPage, page, setPage }) => {
    function gotToFirstPage() {
        setPage(1);
      }
    
      function goToLastPage() {
        setPage(lastPage);
      }
    
      function nextPage() {
        if (page < lastPage) {
          setPage(page + 1);
        }
      }
    
      function previousPage() {
        if (page !== 1 && page <= lastPage) {
          setPage(page - 1);
        }
      }
  return (
    <div>
      <BootstrapPagination>
      <BootstrapPagination.First
        disabled={page <= 1}
        onClick={gotToFirstPage}
      />
      <img
        src={minun}
        style={{ width: "35px" }}
        onClick={previousPage}
        disabled={page <= 1}
        alt=''
      />
      <BootstrapPagination.Item>
        {page} of {lastPage}
      </BootstrapPagination.Item>
      <img
        src={plusle}
        style={{ width: "35px" }}
        disabled={page >= lastPage}
        onClick={nextPage}
        alt=''
      />
      <BootstrapPagination.Last
        onClick={goToLastPage}
        disabled={page >= lastPage}
      />
    </BootstrapPagination>
    </div>
  )
}

export default Pagination
