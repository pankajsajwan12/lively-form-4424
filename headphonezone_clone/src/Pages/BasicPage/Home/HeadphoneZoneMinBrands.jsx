import React from 'react'
import data from '../../../Data/Data.json';
import {IoMdQuote} from 'react-icons/io'

const HeadphoneZoneMinBrands = () => {
    const x = data.minBrandsTodays;
  return (
    <div className="HeadphoneZone_main_div">
       <div className="headphoneZone_Div_Text">
            <div>
                <div className="icons_quote_div"> <IoMdQuote className="icons_quote"/></div>
                <div className="icons_quote_text_div">
                    <h1 style={{textAlign:'center',marginTop:'-2.2rem',zIndex:'2'}}>With Headphone Zone, Indians now have a platform to experience high and 
                        headphones and to seek advice from experts withim the community
                    </h1>
                </div>            
            </div>
            <div className="Headphone_zone_sec_div">
                {
                    x.map((item) => (
                        <div key={item.id}>
                            <img src={item.minBrandImg} alt="brand_logo"/>
                        </div>
                    ))
                }
            </div>
      </div>
      <div className="OurValues_main_Div">
        <div className="OurValue_main_Div_innerDiv flexDiv">
            <div className="value_font">OUR VALUES</div>
            <div className="flexDiv">
                <div >
                   <h1 className="number">01</h1>
                   <h3 className="font_text">WE'RE LADIES & GENTLEMEN SERVING LADIES & GENTLEMEN</h3> 
                </div>
                <div>
                    <h1 className="number">02</h1>
                    <h3 className="font_text">WE CHOOSE TO BE THE BEST, RATHER THAN THE BIGGEST</h3>
                </div>
                <div>
                    <h1 className="number">03</h1>
                    <h3 className="font_text">WE'RE NOT A MUSIC COMPANY,<br/>BUT MUSIC IS AT THE CORE OF WHAT WE DO</h3>
                </div>
                <div>
                    <h1 className="number">04</h1>
                    <h3 className="font_text" style={{width:"13.7rem"}}>WE'RE 100% OWEND,OPERATE AND FUNDED BY PRODU INDIANS</h3>
                </div>
                <div>
                    <h1 className="number">05</h1>
                    <h3 className="font_text">WE SUPPORT SMALL, INDEPENDENT AND LOCAL BUSINESSES AND COMMUNITIE</h3>
                </div>
            </div>
        </div>
    </div>
    <div className="background_color">
        <div className="backgrund_color_center">
            <div className="background_img">
                <img src="https://cdn.shopify.com/s/files/1/0153/8863/files/Club_Audiophile_Logos-400-200_400x.png?v=1640072704" alt="" />
            </div>
            <div className="club_text_div">
                <div className="club_text_div_font">it pays to be an audiophile</div>
                <div className="club_text_small_font">Enjoy Incredible Members-only rewards on the world's fines headphones and earn loyalty points on every purchases.</div>
                <div className="club_button_div">
                <button className="club_btn"> JOIN THE CLUB</button>
                </div>
            </div>
        </div>
    </div>
    <div className="subscribe_background_image">
        <div className="subscribe_whiteBackground">
            <div style={{marginTop:'2rem', marginLeft:'2rem'}}>
                <p className="subscribe_h1_text">SUBSCRIBE TO OUR NEWSLETTER</p>
                <p className="p_text">Sign up to join 1,00,000+ audiophiles & stay in the know with hacks, new launches,curated playlists
                    & once-in-a-lifetime deals.
                </p>
                
                <input type="text" placeholder="Your e-mail" className="Input" />
                <button className="subscribe_btn">SUBSCRIBE</button>
                
            </div>
        </div>
    </div>
        <div className="Everyday_main_Div">
                <div className="Everyday_inner_div">
                    <div className="Everyday_inner_c1">
                        <h2 style={{textAlign:'center'}}>EVERYDAY AT @HEADPHONEZONE</h2>
                        <h2 style={{fontSize:'1rem',textAlign:'center'}}>Follow our growing Insta fam on Instagram for your daily audiophile fix</h2>
                    </div>
                    <div className="Everyday_inner_c2">
                        <div className="Everyday_inner_c2_image">
                            <div className="background_img1_c2">
                                <div className="background_text_blur">
                                    What are your working on for the "No Particular Reason Sale"?
                                </div>
                            </div>
                            <div className="background_img2_c2">
                                <div className="background_text_blur">
                                    Giveaway Alert Ahoy Audiophiles , the "No Particular Reason Sale" is...
                                    <h2 style={{marginTop:'5rem'}}>JULY 21, 2022</h2>
                                </div>
                            </div>
                            <div className="background_img3_c2">
                                <div className="background_text_blur">
                                    You don't really need a reaasaon to rediscover your music. stay tuned..
                                    <h3 style={{marginTop:'5rem'}}>JULY 16, 2022</h3>
                                </div>
                            </div>
                            <div className="background_img4_c2">
                                <div className="background_text_blur">
                                    And next on the map of Headphone Connext, the "City of Joy" aka Lollkata..
                                    <h3 style={{marginTop:'5rem'}}>JULY 13, 2022</h3>
                                </div>
                            </div>
                        </div>
                        <div className="Everyday_inner_c2_mid_imgae">
                            <div className="background_text_mid_blur">
                                Well...we didn't come up with a reason for this sale but do we 
                                actually need one? The "No Particular Reason Sale" starts from
                                21st July onwards!!! #noparticularreason
                                <h3 style={{marginTop:'5rem'}}>JULY 18, 2022</h3>
                            </div>
                        </div>
                        <div className="Everyday_inner_c2_right_imgae">
                            <div className="Everyday_inner_c2_right_imgae1">
                                <div className="background_text_blur">
                                    The No Particular Reason Sale goes live in just a few hours !!! Set your alarm...
                                    <h3 style={{marginTop:'5rem'}}>JULY 20,2022</h3>
                                </div>
                            </div>
                            <div className="Everyday_inner_c2_right_imgae2">
                                <div className="background_text_blur">
                                    <p>Asked everyone from the team but couldn't find a prime reason for the sale...</p>
                                    <h3 style={{marginTop:'5rem'}} >JULY 19, 2022</h3>
                                </div>
                            </div>
                            <div className="Everyday_inner_c2_right_imgae3">
                                <div className="background_text_blur">
                                    <p>Good sound doesn't always have to be synonyous with wxpensive</p>
                                    <h3 style={{marginTop:'5rem'}}>JULY 12, 2022</h3>
                                </div>
                            </div>
                            <div className="Everyday_inner_c2_right_imgae4">
                                <div className="background_text_blur">
                                    <p>Watch our Bollywood enthusiasts Manali and Karishma kill it yet again i...</p>
                                    <h3 style={{marginTop:'5rem'}}>JULY 11, 2022</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div> 
  )
}

export default HeadphoneZoneMinBrands