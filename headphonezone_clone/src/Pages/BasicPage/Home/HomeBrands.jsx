import React from 'react';
import data from '../../../Data/Data.json'
import "./NewLuch.css"

const HomeBrands = () => {
    const BrandData = data.brands;
  return (
    <div className="Brand_main-div">
        <div className="Brand_text_div">
            <div className="Brand_text_first">THE ONLY REASON NAMES ARE MISSING IS BECAUSE THE PROBABLY SOUND LIKE CRAP</div>
            <div className="Brand_text_Second">HOME TO THE WORLD'S FINEST BRANDS</div>
        </div>
        <div className="Brand_second_main-div">
        {
            BrandData.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt={item.id}/>
                </div>
            ))
        }
        </div>
        <div className="brand_div">
            <button className="brand_btn">SEE ALL</button>
        </div>
    </div>
  )
}

export default HomeBrands