import React from 'react'
import './Footer.css'
import {RiFacebookFill} from 'react-icons/ri'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImYoutube} from 'react-icons/im'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-main">
        <div>
            <div className="Top-footer-menu">
                <div className="Top-footer-menu-divFirst">
                    <div className="footer-sub-menu">LET US HELP</div>
                     <div>
                         <ul>
                             <li>Help Center</li>
                             <li>Track My Order</li>
                             <li>Cancel My Order</li>
                             <li>Return My Order</li>
                             <li>Request a Product</li>
                             <li>Report a Bug</li>
                             <li>Contact Us</li>
                         </ul>
                     </div>
                </div>
                <div className="Top-footer-menu-divSecond">
                    <div className="footer-sub-menu">OUR POLICIES</div>
                    <div>
                        <ul>
                            <li>Shipping & Delivery</li>
                            <li>Returns, Refunds & Cancellations</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="Top-footer-menu-divThird">
                    <div className="footer-sub-menu">COMMUNITY</div>
                    <div>
                        <ul>
                            <li>Headphone Zone Merchandise</li>
                            <li>Trade-Up Program</li>
                            <li>The Insider</li>
                        </ul>
                    </div>
                </div>
                <div className="Top-footer-menu-divFour">
                    <div style={{width:'150px'}} className="footer-sub-menu">BEWARE OF FAKES</div>
                    <div>
                        <p style={{width:'330px'}}>
                            Don't get fooled.Look out for smuggled &
                            refurbished headphones while shopping online.
                            Headphone Zone is a professionally run business &
                            deals only in 100% genuine headphones.
                        </p>
                        <a>Learn more</a>
                    </div>
                </div>
                <div className="Top-footer-menu-divFive">
                    <div className="footer-sub-menu">FOLLOW US</div>
                    <div className="social-media-icons">
                        <div className='socai-icon'><RiFacebookFill/></div>
                        <div className='socai-icon'><AiOutlineTwitter /></div>
                        <div className='socai-icon'><AiOutlineInstagram /></div>
                        <div className='socai-icon'><ImYoutube/></div>
                    </div>
                </div>
            </div>
            <hr style={{color:'black',width:'100%'}}/>
            <div className="bottom-footer-menu">
                <div className="bottom-footer-menu-Div">
                    <p className="bottom-footer-menu-firstDiv">Owned, Operated & Funded by Produ Indians</p>
                    <p className="bottom-footer-menu-firstDiv">Copyright &#169; 2011-2022 <Link to="/">Headphone Zone</Link></p>
                    <p className="bottom-footer-menu-firstDiv">
                        Everything on this website had been made with a lot of love and hard work. if you copy anything we will 
                        hunt you down. We mean it.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer