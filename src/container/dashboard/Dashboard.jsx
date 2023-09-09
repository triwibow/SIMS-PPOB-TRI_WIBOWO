import React, { useEffect } from 'react'
import { fetchData } from '../../store/actions/userAction'
import { useDispatch } from 'react-redux'

import BannerSaldo from '../../component/banner/BannerSaldo'
import Category from './category/Category'

const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [])

  return(
    <>
      <BannerSaldo />
      <Category />  
    </>

  )
}

export default Dashboard