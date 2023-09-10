import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Banner from './component/Banner'
import { fetchData } from '../../../store/actions/bannerAction'
import {modalError} from '../../../store/actions/modalAction'
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => {
  return (
    <>
      <div className='col-3'>
        <Skeleton height={120} className='mb-2' />
      </div>
    </>
  )
}

const Slider = () => {
  const dispatch = useDispatch()
  const { status, message, banner } = useSelector(state => state.banner)
  const [width, setWidth] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  const _renderData = (item, index) => {
    return (
      <div className='col-4' key={index}>
        <SwiperSlide key={index}>
          <Banner 
            data={item}
          />
        </SwiperSlide>
      </div>
    )
  }

  const _renderSkeleton = () => {
    let data = [];
    for (var i = 0; i < 4; i++) {
      data.push(<SkeletonLoader key={i}/>);
    }
    return data;
  }

  useEffect(() => {
    if(typeof window != undefined){
      setWidth(window.innerWidth)
    }
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    if(status == 'error'){
      dispatch(modalError(true, {description:message}))
    }
  }, [status])


  useEffect(() => {
    if(width <= 576){
      setSlidesPerView(1)
    } else if(width <= 768){
      setSlidesPerView(2)
    } else {
      setSlidesPerView(4)
    }
  }, [width])

  return (
    <div className='container mt-5'>
      <Swiper
        spaceBetween={5}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <div className='row' slot='container-start'>
          <div className='col-md-12 mb-4'>
            <h2 className='text-head-3 fw-bold'>
              Temukan Promo Menarik
            </h2>
          </div>
        </div>
        
        {width > 0 && (
          <>
            {status == 'loading'? (
              <div className='row'>
                {_renderSkeleton()}
              </div>
            ):(
              <div className='row'>
                {banner.map((item, index) => {
                  return _renderData(item, index)
                })}
              </div>
            )}
          </>
        )}
      </Swiper>
    </div>
  )
}

export default Slider