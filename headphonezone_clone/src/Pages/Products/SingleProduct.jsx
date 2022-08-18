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
  console.log(productName)
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
    <div onClick={handleClick} style={{width:"14rem", height:'25rem', border:'1px solid red',margin:'auto',marginTop:'1rem'}} >
        <div>
        <img src={productImage} alt={productName} />
        <div key={id}>
            <p style={{textAlign:'center'}}>MRP :  ₹ {mrp}</p>
            <p >{sellingPrice ? (<p style={{textAlign:'center'}}>Selling ₹ {sellingPrice}</p>) : (<p></p>)}</p>
            <p style={{textAlign:'center'}}>Sale Price :₹{salePrice}</p>
            <p style={{textAlign:'center'}}>{productCode}</p>
            <p style={{textAlign:'center'}}>{productName}</p>
        </div> 
        <Link to={`/Deals/fullProductDeatils/${id}`}>show more data</Link>
      </div>
    </div>
    {/* <div><FullProductDeatils data={data}/></div> */}
    </>
  )
}

export default SingleProduct