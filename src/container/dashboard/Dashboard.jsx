import React from 'react'

import ModalError from '../../component/modal/ModalError'
import BannerSaldo from '../../component/banner/BannerSaldo'
import Category from './category/Category'
import Slider from './slider/Slider'

const Dashboard = () => {
  return(
    <>
      <BannerSaldo />
      <Category />  
      <Slider />
      <ModalError />
    </>

  )
}

export default Dashboard