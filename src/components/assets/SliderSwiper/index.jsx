import React from 'react'
// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Picture } from '../Picture'

export function SliderSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Picture src="/imgs/gallery/img_01.jpeg" alt="image_01" />
        </SwiperSlide>
        <SwiperSlide>
          <Picture src="/imgs/gallery/img_02.jpeg" alt="image_01" />
        </SwiperSlide>
        <SwiperSlide>
          <Picture src="/imgs/gallery/img_03.jpeg" alt="image_01" />
        </SwiperSlide>
        <SwiperSlide>
          <Picture src="/imgs/gallery/img_04.jpeg" alt="image_01" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
