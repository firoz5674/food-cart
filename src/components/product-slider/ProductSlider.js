

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import dinner from '../../assets/images/food-items/dinner.jpg'
import breakfast from '../../assets/images/food-items/breakfast.jpg'
import dinner2 from '../../assets/images/food-items/dinner2.jpg';
import breakfast2 from '../../assets/images/food-items/breakfast2.jpg';
import dinner3 from '../../assets/images/food-items/dinner3.jpg';
import breakfast3 from '../../assets/images/food-items/breakfast3.jpg';
import dinner4 from '../../assets/images/food-items/dinner4.jpg';
import breakfast4 from '../../assets/images/food-items/breakfast4.jpg'
import lunch from '../../assets/images/food-items/lunch.jpg';
import lunch2 from '../../assets/images/food-items/lunch2.jpg';
import dinner5 from '../../assets/images/food-items/dinner5.jpg';
import fruits from '../../assets/images/food-items/fruits.jpg';

const ProductSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={fruits} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={dinner} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={breakfast2} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={breakfast4} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={dinner4} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={lunch} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={lunch2} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={dinner3} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={breakfast} className='img-fluid slide-img' alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

export default ProductSlider