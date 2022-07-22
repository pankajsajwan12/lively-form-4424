import React from 'react'
import HomeAudioPhile from '../HomeImageSildeShow/HomeAudioPhile'
import TopSlideShow from '../HomeImageSildeShow/TopSlideShow'
import BrandText from './Home/BrandText'
import ChartToppingHeadphones from './Home/ChartToppingHeadphones'
import HeadphoneExperiences from './Home/HeadphoneExperiences'
import HomeBrands from './Home/HomeBrands'
import NewLaunch from './Home/NewLaunch'

const Home = () => {
  return (
    <div>
      <TopSlideShow />
      <HomeAudioPhile />
      <ChartToppingHeadphones />
      <NewLaunch />
      <HomeBrands />
      <BrandText />
      <HeadphoneExperiences />
    </div>
  )
}

export default Home