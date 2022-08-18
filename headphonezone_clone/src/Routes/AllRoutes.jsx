import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Catergories from '../Pages/BasicPage/Catergories'
import Deals from '../Pages/BasicPage/Deals'
import Events from '../Pages/BasicPage/Events'
import HeadphoneFinder from '../Pages/BasicPage/HeadphoneFinder'
import Home from '../Pages/BasicPage/Home'
import Brands from '../Pages/BasicPage/Brands'
import Forum from '../Pages/BasicPage/Forum'
import HelpCenter from '../Pages/BasicPage/HelpCenter'
import Cart from '../Pages/BasicPage/Cart'
import Search from '../Pages/BasicPage/Search'
import Account from '../Pages/BasicPage/Account'
import Info from '../Pages/BasicPage/Info'
import Price from '../Pages/BasicPage/Price'
import LogoutPage from '../Pages/Login/LogoutPage'
import LoginPage from '../Pages/Login/LoginPage'
import FullProductDeatils from '../Pages/Products/FullProductDeatils'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/categories" element={<Catergories />}/>
        <Route path="/Brands" element={<Brands/>}/>
        <Route path="/Deals" element={<Deals />}/>
        <Route path="/Headphonefinder" element={<HeadphoneFinder />}/>
        <Route path="/Events" element={<Events />}/>
        <Route path="/Forum" element={<Forum />}/>
        <Route path="/info" element={<Info />}/>
        <Route path="/HelpCenter" element={<HelpCenter />} />
        <Route path="/search" element={<Search />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/price" element={<Price />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/Deals/fullProductDeatils" element={<FullProductDeatils />} />
        <Route path="Deals/fullProductDeatils/:id" element={<FullProductDeatils />} />
    </Routes>
  )
}

export default AllRoutes