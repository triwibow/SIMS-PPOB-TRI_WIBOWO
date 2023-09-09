import React from 'react'

import ModalError from '../../component/modal/ModalError'
import BannerSaldo from '../../component/banner/BannerSaldo'
import Category from './category/Category'

const Dashboard = () => {
  return(
    <>
      <BannerSaldo />
      <Category />  
      <ModalError />
    </>

  )
}

export default Dashboard