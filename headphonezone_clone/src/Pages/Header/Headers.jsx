import React from 'react'
import './Headers.css'
import LogoIcon from '../../Icons/LogoIcon';
import { Link } from 'react-router-dom';
import CategoriesDoupDown from '../../HeaderDroupDown/CategoriesDoupDown';
import PriceDroupDown from '../../HeaderDroupDown/PriceDroupDown';
import DealDroupDown from '../../HeaderDroupDown/DealDroupDown';
import BrandsDroupDown from '../../HeaderDroupDown/BrandsDroupDown';
import { DrawerExample } from '../../ChakraComponents/LoginDrawer';

const Headers = () => {
  return (
      <nav >
    <div className="Nav">
        <div className="header-icon-logo">
           <Link to="/">  <LogoIcon /> </Link>
             </div>
        <div className="header-mid-menu">
            <div className="droupdown">
                 <Link to="/categories">
                     <p className="droupbtn">Categories</p> </Link>
                 <div className="categories-dropdown-content">
                     <CategoriesDoupDown /> 
                 </div>
            </div>

            <div className="droupdown-brand">
                <Link to="/Brands">
                     Brands
                </Link>
                <div className="brand-droupDown-content">
                    
                    <BrandsDroupDown />
                    </div>
            </div>
            <div  className="droupdown-price">
                <Link to="/price">Price </Link>
                <div className="price-droupDown-content">
                    <PriceDroupDown />
                    </div>
            </div>
            <div className="droupdown-deal">
                <Link to="/Deals">Deals </Link>
                <div className="deal-droupDown-content">
                    <DealDroupDown />
                </div>
            </div>
            <div>
                <Link to="/Headphonefinder">Headphone Finder </Link>
            </div>
            <div>
                <Link to="/Events"> Events </Link>
            </div>
            <div> <Link to="/Forum"> Forum </Link> </div>
            <div>
                <Link to="/info">Info </Link>
            </div>
            <div> <Link to="/HelpCenter"> Help Center </Link> </div>
        </div>
        <div className="header-left-menu">
            <div><Link to="/search">Search </Link></div>
            <div><Link to="/account">Account </Link></div>
            <div><Link to="/cart"> <DrawerExample /> </Link></div>
        </div>
    </div>
      </nav>
  )
}

export default Headers
