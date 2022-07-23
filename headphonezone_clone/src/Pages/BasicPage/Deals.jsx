import React from 'react'
import data from '../../Data/Product.json';
import HeadphoneProducts from '../Products/FullProductDeatils'
import SingleProduct from '../Products/SingleProduct';

const Deals = () => {
  // console.log("hy");
  // console.log("data",data.product);
  return (
    <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",paddingTop:'6rem'}}>
     {
       data.product.map((item) => (
         <div key={item.id}>
            <SingleProduct  productImage={item.productImage} mrp={item.mrp} sellingPrice={item.sellingPrice} salePrice={item.SalePrice} productCode={item.prductCode}
            productName={item.productName} id={item.id}/>
         </div>
       ))
     }

    </div>
  )
}

export default Deals