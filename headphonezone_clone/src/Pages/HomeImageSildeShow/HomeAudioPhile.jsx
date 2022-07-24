import React from 'react'
import data from '../../Data/Data.json'
const HomeAudioPhile = () => {
    const audiopholeData= data.Data1;
    const audiopholeData2 = data.Data2;
    // console.log("hu",audiopholeData)
  return (
    <div className="audiopholeDiv-main">

        <div className="audiopholeDiv-Inner_main">
            <div className="audiopholeDiv-Inner_main-Header_Text">START YOUR AUDIOPHILE JOURNEY HERE</div>

            <div className="audiopholeDiv-main-productFirst_div">
                {
                    audiopholeData.map((item) => (
                        <div key={item.id} className="product-Div_first">
                            <img src={item.imgae} alt={item.proname} width="86" height="86" className="audiophole_image"/>
                            <p className="text">{item.proname}</p>
                        </div>
                    ))
                }
            </div>
            <div className="audiopholeDiv-main-productSecond_div">
                {
                    audiopholeData2.map((item) => (
                        <div key={item.id} className="product-Div_first">
                            <img src={item.imgae} alt={item.proname} width="86" height="86" className="audiophole_image"/>
                            <p className="text">{item.proname}</p>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className="Like_you_div">
                    <div className="home-mid_text">LIKE YOU, WE LOVE MUSIC...</div>
                    <div className="HomeAudioPhile_p_div">
                      <p className="HomeAudioPhile_p_div_text">And we believe a Headphone is more than just an instrument for sund.</p>
                       <p className="HomeAudioPhile_p_div_text">It's the key to a mind-blowing moment of emotion,bringing you closer to your favourite artist,and yourself.</p>
                       <p className="HomeAudioPhile_p_div_text">We've curated the world's finest headphones & earphones to help you discover the riffs, percussions, basslines and solos that were always <br/>there but never heard.</p> 
                    </div>
                </div>
            </div>
        </div>
        <div className="vido_div">
                <iframe src="https://player.vimeo.com/video/681364200?autoplay=1&autopause=1&background=1&loop=1&muted=1&transparent=0&responsive=1&portrait=0&title=0&byline=0&color=444444" width="100%" height="700px" allow="autoplay" frameborder="0" allow="autoplay; encrypted-media" allowFullScreen="allowfullscreen">
                </iframe>
        </div>
    </div>
  )
}

export default HomeAudioPhile