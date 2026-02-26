import './Home.scss'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Autoplay } from 'swiper/modules'
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx'
import centerImage from '../../assets/images/center.png'

import { specialists } from '../../data/specialists'
import { categories } from '../../data/categories'
import { advantages } from '../../data/advantages'
import { reviews } from '../../data/reviews'

const Home = () => {
  return (
    <div className='home'>
      {/* HERO */}
      <HeroSlider />

      {/* ABOUT */}
      <section className='home__section'>
        <div className='home__container home__about'>
          <div className='home__about-content'>
            <h2 className='home__heading'>О центре</h2>

            <p className='home__text'>
              Центр психологии Solt — это пространство профессиональной
              поддержки и бережного отношения к каждому человеку. Наша миссия —
              помогать людям находить внутреннюю опору, выстраивать здоровые
              отношения и жить более осознанной, гармоничной жизнью. Мы
              объединяем опытных специалистов, работающих в современных научно
              обоснованных подходах. Гарантируем конфиденциальность,
              индивидуальный подход и уважение к личным границам каждого
              клиента.
            </p>

            <Link to='/about' className='btn btn--outline'>
              Подробнее
            </Link>
          </div>

          <div className='home__about-image'>
            <img src={centerImage} alt='Центр психологии Solt' />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className='home__section home__section--gray'>
        <div className='home__container'>
          <h2 className='home__heading'>С чем мы работаем</h2>

          <div className='home__grid'>
            {categories.map((item, index) => (
              <Link key={index} to='/categories' className='home__card'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='home__card-bg'
                />

                <div className='home__card-overlay'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>

          <Link to='/categories' className='btn btn--outline'>
            Все категории →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className='home__cta-section'>
        <div className='home__cta'>
          <h2>Начните изменения уже сегодня</h2>

          <p>
            Запишитесь на первую консультацию и получите профессиональную
            поддержку в комфортной и безопасной атмосфере.
          </p>

          <button className='btn'>Записаться</button>
        </div>
      </section>
      {/* ADVANTAGES */}
      <section className='home__section home__section--accent'>
        <div className='home__container home__advantages'>
          <div className='home__advantages-info'>
            <h2 className='home__heading'>Почему выбирают Solt</h2>

            <p className='home__text'>
              Мы создаём безопасное пространство для изменений, где каждый
              человек получает поддержку и профессиональный подход.
            </p>
          </div>

          <div className='home__advantages-grid'>
            {advantages.map((item, index) => (
              <div key={index} className='home__advantage'>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className='home__section'>
        <div className='home__container home__process'>
          <h2 className='home__heading'>Как проходит консультация</h2>

          <div className='home__process-steps'>
            {[
              {
                title: 'Первый контакт',
                text: 'Знакомство и обсуждение вашего запроса.',
              },
              {
                title: 'Диагностика',
                text: 'Анализ текущего состояния и определение направления работы.',
              },
              {
                title: 'План работы',
                text: 'Составление индивидуальной стратегии изменений.',
              },
              {
                title: 'Консультации',
                text: 'Регулярные встречи и поддержка на всём пути.',
              },
            ].map((step, index) => (
              <div key={index} className='home__process-step'>
                <div className='home__process-number'>{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISTS */}
      <section className='home__section home__section--accent'>
        <div className='home__container home__specialists'>
          <h2 className='home__heading'>Наши специалисты</h2>

          {specialists.length > 6 ? (
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              spaceBetween={30}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                1200: { slidesPerView: 3 },
                768: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {specialists.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='home__specialist-card'>
                    <div className='home__specialist-image'>
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className='home__specialist-content'>
                      <h3>{item.name}</h3>
                      <span className='home__specialist-role'>{item.role}</span>
                      <p>{item.text}</p>
                      <button className='btn btn--outline'>Подробнее</button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className='home__specialists-grid'>
              {specialists.map((item, index) => (
                <div key={index} className='home__specialist-card'>
                  <div className='home__specialist-image'>
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className='home__specialist-content'>
                    <h3>{item.name}</h3>
                    <span className='home__specialist-role'>{item.role}</span>
                    <p>{item.text}</p>
                    <button className='btn btn--outline'>Подробнее</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section className='home__section'>
        <div className='home__container home__reviews'>
          <h2 className='home__heading'>Отзывы клиентов</h2>

          <p className='home__text home__reviews-text'>
            Реальные истории людей, которые прошли путь изменений вместе с
            нашими специалистами.
          </p>

          <div className='home__reviews-grid'>
            {reviews.map((review, index) => (
              <div key={index} className='home__review-card'>
                <p className='home__review-text'>“{review.text}”</p>

                <span className='home__review-name'>— {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
