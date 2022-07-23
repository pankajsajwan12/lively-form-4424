
import React from 'react'

const FullProductDeatils = ({data}) => {
  console.log(data,"useNavigate");
  return (
    <div style={{paddingTop:'6rem'}}>
      hello my name is pankaj singh sajwan
       {/* <img src={data.productImage} alt={data.productName} />
       <div>
           <p>{data.mrp}</p>
           <p>{data.sellingPrice ? data.sellingPrice : null}</p>
           <p>{data.salePrice}</p>
           <p>{data.productCode}</p>
           <p>{data.productName}</p>
      </div> */}
    </div>
  )
}

export default FullProductDeatils