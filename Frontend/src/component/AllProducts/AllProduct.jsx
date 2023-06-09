import React from 'react'
import Portfolio from '../Portfolio/Portfolio';
import Search from '../Search/Search';
import { useLocation } from 'react-router-dom';

const AllProduct = () => {
  const location = useLocation();
  // const { product, selectedCompanies } = location.state;
  const product=location.state.product;
  const selectedCompanies = location.state.companies;
  // console.log(selectedCompanies)
  return (
   <>

      <Portfolio product={product} selectedCompanies={selectedCompanies} />   
   </>
    

  )
}

export default AllProduct
