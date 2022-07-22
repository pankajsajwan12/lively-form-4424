import React from 'react'

const BrandText = () => {
  return (
    <div className="BrandText_main_div">
    <div className="BrandText_main_div_two">
       <div className="Brand_text_divFirst">
           <div className="img_div">
               <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-simpl-logo-homepage-1_300x.png?v=1657347661" alt="simple" width="230" height="70"/>
           </div>
           <div className="BrandText_MainText">
               <p>10% cashback up to &#8377;750 on orders above &#8377;5,000 /-</p>
           </div>
           <div className="BrandText_div">
               <p>offer period: valid till 31st July,2022</p>
               <p>Sale offer</p>
               <p style={{width:'400px'}}>Payment Gateway : Select Simple Pay in 3 at Checkout to transact with Simpl</p>
           </div>
       </div> 
       <div className="Brand_text_divSecond">
           <div className="img_div">
               <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphone-Zone-axio-logo-homepage-1_300x.png?v=1657347643" alt="axio" width="230" height="70" />
           </div>
           <div className="BrandText_MainText">
           <p style={{textAlign:'left'}}>Flat &#8377;500 cashback on orders above &#8377;5,000</p>
           </div>
           <div className="BrandText_div">
               <p>Tenure Available: 3 months</p>
               <p>Offer period: Till 31st July, 2022</p>
               <p>Eligibility: All Walnut369 users, No Credit Card Required</p>
               <p>Payment Gateway: Choose Razorpay at Checkout</p>
           </div>
       </div> 
    </div>
       <div className="Brand_text_divThree">
           <div className="Div_three">
            <div className="img_div">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Headphones-Zone-bajaj-finserv-logo_254x.png?v=1657960437" alt="bajaj_finserv" width="230" height="70" />
            </div>
            <div className="BrandText_MainText">
                <p style={{textAlign:'left'}}> NO COST EMI WITH BAJAJ FINSERV</p>
            </div>
            <div className="BrandText_div">
                <p>Tenure Available: 3 months</p>
                <p>Eligibility: All Bajaj Finserv card owners</p>
                <p> Transaction value: Available on all orders above Rs. 4,500/- </p>
                <p>Payment Gateway: Choose Razorpay at Checkout</p>
            </div>
           </div>
          
       </div> 
    </div>
   
  )
}

export default BrandText