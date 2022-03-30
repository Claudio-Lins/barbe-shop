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
    <Swiper
      spaceBetween={50}
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
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
        2000: {
          slidesPerView: 3,
          spaceBetween: 100,
        },
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="flex flex-col mb-8">
          <Picture src="/imgs/gallery/img_01.jpeg" alt="image_01" />
          <h3 className='text-center text-barber-shop-orange font-bold text-2xl mt-4'>Side Parting 1</h3>
          <p className='text-center px-2'>
            Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
            de bebadis, arcu quam euismod magna. Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.{' '}
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col mb-8">
          <Picture src="/imgs/gallery/img_02.jpeg" alt="image_01" />
          <h3 className='text-center text-barber-shop-orange font-bold text-2xl mt-4'>Side Parting 2</h3>
          <p className='text-center px-2'>
            Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
            de bebadis, arcu quam euismod magna. Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.{' '}
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col mb-8">
          <Picture src="/imgs/gallery/img_03.jpeg" alt="image_01" />
          <h3 className='text-center text-barber-shop-orange font-bold text-2xl mt-4'>Side Parting 3</h3>
          <p className='text-center px-2'>
            Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
            de bebadis, arcu quam euismod magna. Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.{' '}
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col mb-8">
          <Picture src="/imgs/gallery/img_04.jpeg" alt="image_01" />
          <h3 className='text-center text-barber-shop-orange font-bold text-2xl mt-4'>Side Parting 4</h3>
          <p className='text-center px-2'>
            Mussum Ipsum, cacilds vidis litro abertis. Copo furadis é disculpa
            de bebadis, arcu quam euismod magna. Nec orci ornare consequat.
            Praesent lacinia ultrices consectetur. Sed non ipsum felis.{' '}
          </p>
        </div>
      </SwiperSlide>
      
    </Swiper>
  )
}
