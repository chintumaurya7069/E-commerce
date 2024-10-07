import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';


const SearchItems = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);



  useEffect(() => {
    const filteredData = () => {
      return items.filter((p) => p.title.includes(term));
    }
    // console.log(filteredData());

    setFilterData(filteredData());

  }, [term])



  return (
    <Product items={filterData} />
  )
}

export default SearchItems