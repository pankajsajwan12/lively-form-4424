import React from 'react'
import data from '../../Data/Product.json';
import HeadphoneProducts from '../Products/FullProductDeatils'
import SingleProduct from '../Products/SingleProduct';

const Deals = () => {
  // console.log("hy");
  // console.log("data",data.product);
  return (
    <>
    <div style={{display:'flex'}}>
      <div style={{width:"20%", backgroundColor:'black', marginLeft:'1rem'}}></div>
     <div style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",paddingTop:'6rem', width:'70%', marginLeft:'1rem'}}>
      {
        data.product.map((item) => (
          <div key={item.id}>
              <SingleProduct  productImage={item.productImage} mrp={item.mrp} sellingPrice={item.sellingPrice} salePrice={item.SalePrice} productCode={item.productCode}
              productName={item.prductName} id={item.id} />
          </div>
        ))
      }
     </div>
    </div>
    </>
  )
}

export default Deals