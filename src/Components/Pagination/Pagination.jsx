import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Pagination = () => {

  const [results,setResults] = useState([])
  const [currentPage,setCurrentPage] = useState(0);

  const PAGE_SIZE = 10;


  const fetchData = async() =>{

    const data = await fetch('https://dummyjson.com/products?limit=500')
    const json = await data.json()

    setResults(json.products)

  }



  useEffect(()=>{

    fetchData();

  },[])

    const totalProducts = results.length;
  const noOfPages = Math.ceil(totalProducts/PAGE_SIZE)
  const start = currentPage * PAGE_SIZE;
  const end = start   + PAGE_SIZE

  const handelClick= (n)=>{

    setCurrentPage(n)

  }

  return !results.length ? <p>No data found</p> : (
    <div>

      <h1 className='pagination-title'>Pagination</h1>

      <div className='product-container'>

     
      {results.slice(start,end).map((result)=>(
            <Cards key={result.id} image={result.thumbnail} title={result.title} />
      ))}

       </div>

       <div className='pagination-container'>
          {[...Array(noOfPages).keys()].map((n)=>(
            <span className='page-number' onClick={()=>handelClick(n)} key={n}>{n}</span>
          ))}
       </div>
      
    </div>
  )
}

export default Pagination