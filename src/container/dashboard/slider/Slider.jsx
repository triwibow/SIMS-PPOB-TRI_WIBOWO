import React, { useEffect, useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import Banner from './component/Banner'


const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <button className='button-transparent' onClick={() => swiper.slidePrev()}>
      <IoChevronBackOutline className="text-xl" />
    </button>
  )
}

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <button className='button-transparent' onClick={() => swiper.slideNext()}>
      <IoChevronForwardOutline className="text-xl" />
    </button>
  )
}

const Slider = () => {
  const [width, setWidth] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  const data = [
    {
      id:"1",
      user:"Golden Man 1",
      username:"@batman",
      current_bid:"112.4 ETH",
    },
    {
      id:"2",
      user:"Golden Man 2",
      username:"@batman",
      current_bid:"112.4 ETH",
    },
    {
      id:"3",
      user:"Golden Man 3",
      username:"@batman",
      current_bid:"112.4 ETH",
    },
    {
      id:"4",
      user:"Golden Man 4",
      username:"@batman",
      current_bid:"11.4 BTC",
    },
    {
      id:"5",
      user:"Golden Man 5",
      username:"@batman",
      current_bid:"11.4 BTC",
      
    },
    {
      id:"6",
      user:"Golden Man 6",
      username:"@batman",
      current_bid:"11.4 BTC",
    },
    {
      id:"7",
      user:"Golden Man 6",
      username:"@batman",
      current_bid:"11.4 BTC",
    },
    {
      id:"8",
      user:"Golden Man 6",
      username:"@batman",
      current_bid:"11.4 BTC",
    }

  ]

  const _renderData = (item) => {
    return (
      <div className='col-md-3' key={item.id}>
        <SwiperSlide key={item.id}>
          <Banner 
            data={item}
          />
        </SwiperSlide>
      </div>
    )
  }

  useEffect(() => {
    if(typeof window != undefined){
      setWidth(window.innerWidth)
    }
  }, [])

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
        spaceBetween={20}
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
        
        {width > 0? (
          <div className='row'>
            {data.map((item) => {
              return _renderData(item)
            })}
          </div>
        ):(
          <></>
        )}
      </Swiper>
    </div>
  )
}

export default Slider