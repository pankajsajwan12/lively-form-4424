import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import FullProductDeatils from './FullProductDeatils'

const SingleProduct = ({
    productImage,
    mrp,
    sellingPrice,
    salePrice,
    productCode,
    productName,
    id
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        setData({...data,productImage,
            mrp,
            sellingPrice,
            salePrice,
            productCode,
            productName,
            id})
     navigate("/fullProductDeatils")   
    }
    const [data, setData] = useState([]);
    console.log("data",data);
  return (
      <>
    <div onClick={handleClick}>
        <div>
        <img src={productImage} alt={productName} />
        <div>
            <p>{mrp}</p>
            <p>{sellingPrice ? sellingPrice : null}</p>
            <p>{salePrice}</p>
            <p>{productCode}</p>
            <p>{productName}</p>
        </div> 
      </div>
    </div>
    {/* <div><FullProductDeatils data={data}/></div> */}
    </>
  )
}

export default SingleProduct