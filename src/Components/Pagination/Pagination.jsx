import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Pagination = () => {
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500");
    const json = await data.json();

    setResults(json.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = results.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handelClick = (n) => {
    setCurrentPage(n);
  };

  const handelNextPage = ( )=>{

    setCurrentPage((prev)=> prev + 1)

  }

   const handelPrevPage = ( )=>{
     setCurrentPage((prev)=> prev - 1)
  }


  return !results.length ? (
    <p>No data found</p>
  ) : (
    <div>
      <h1 className="pagination-title">Pagination</h1>

      <div className="product-container">
        {results.slice(start, end).map((result) => (
          <Cards
            key={result.id}
            image={result.thumbnail}
            title={result.title}
          />
        ))}
      </div>

      <div className="pagination-container">
        <button  disabled={currentPage === 0} onClick={()=>handelPrevPage()} className="page-number">◀</button>
        {[...Array(noOfPages).keys()].map((n) => (
          <button className={"page-number " + ( n === currentPage ? "active-button" : "")} onClick={() => handelClick(n)} key={n}>
            {n}
          </button>
        ))}
        <button disabled={currentPage === noOfPages -1 } onClick={()=>handelNextPage()} className="page-number">▶</button>
      </div>
    </div>
  );
};

export default Pagination;
