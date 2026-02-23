import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import './HeroSlider.scss'

import slide1 from '../../assets/slider/slide1.jpg'
import slide2 from '../../assets/slider/slide2.jpg'
import slide3 from '../../assets/slider/slide3.jpg'
import slide4 from '../../assets/slider/slide4.jpg'

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop
      className='hero-swiper'
    >
      <SwiperSlide>
        <div
          className='hero-slide'
          style={{ backgroundImage: `url(${slide1})` }}
        >
          <div className='hero-overlay'>
            <h2>Профессиональная поддержка</h2>
            <p>Помогаем пройти сложные жизненные этапы.</p>
            <Link to='/contacts' className='hero-button'>
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className='hero-slide'
          style={{ backgroundImage: `url(${slide2})` }}
        >
          <div className='hero-overlay'>
            <h2>Безопасное пространство</h2>
            <p>Конфиденциальность и поддержка в каждой консультации.</p>
            <Link to='/contacts' className='hero-button'>
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className='hero-slide'
          style={{ backgroundImage: `url(${slide3})` }}
        >
          <div className='hero-overlay'>
            <h2>Работа с любыми запросами</h2>
            <p>От тревоги до семейных кризисов.</p>
            <Link to='/contacts' className='btn'>
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className='hero-slide'
          style={{ backgroundImage: `url(${slide4})` }}
        >
          <div className='hero-overlay'>
            <h2>Работа с любыми запросами</h2>
            <p>От тревоги до семейных кризисов.</p>
            <Link to='/contacts' className='hero-button'>
              Записаться на консультацию
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default HeroSlider
