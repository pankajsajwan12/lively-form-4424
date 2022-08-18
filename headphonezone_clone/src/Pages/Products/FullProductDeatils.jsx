import React, { useEffect, useState } from 'react'
import data from '../../Data/Product.json'
import {Link} from 'react-router-dom'

const FullProductDeatils = () => {
  const [pro, setPro] = useState([]);
  useEffect(() => {
    setPro(data.product)
  })
  

  console.log(pro,"pro");
  return (
    <div style={{paddingTop:'6rem'}}>
       <h1>User Single Page</h1>
      <h3>
        {" "}
        Name: {pro.prductName}
      </h3>
      <img src={pro.productImage} alt={pro.prductName}  width="100"  height="100npm "/>
      <div>
        <Link to="/Deals">Go back</Link>
      </div>
    </div>
  )
}

export default FullProductDeatils