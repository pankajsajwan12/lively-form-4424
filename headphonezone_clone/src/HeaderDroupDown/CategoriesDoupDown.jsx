import React from 'react'
import data from "../Data/Data.json";
import './DroupDown.css'
const CategoriesDoupDown = () => {

  const x = data.Data1
  const y = data.Data2
  console.log(x);
  return (
    <div className="CategoriesDoupDown-main">

    <div className="CategoriesDoupDown-div-first">
    {x.map((item) => (
      <div className="droupdown-bar">
        <img src={item.imgae} alt={item.proname} width="80" height="80" />
        <p className="droup-p">{item.proname}</p>
      </div>
    ))}
    </div>

    <div className="CategoriesDoupDown-div-second">
    {y.map((pro) => (
      <div className="droupdown-bar">
        <img src={pro.imgae} alt={pro.proname} width="80" height="80" />
        <p>{pro.proname}</p>
      </div>
    ))}
    </div>
</div>
  )
}

export default CategoriesDoupDown