import { Link } from 'react-router-dom'
import { useState } from 'react'
import './about.scss'

import center from '../../assets/images/center.png'

export default function About() {
  const [activeImage, setActiveImage] = useState(null)

  return (
    <section className='about-page'>
      <div className='container'>
        {/* Hero */}
        <div className='about-hero'>
          <h1>О центре</h1>
          <p>
            Психологический центр «Баланс» — это пространство профессиональной
            поддержки и бережного отношения к каждому клиенту.
          </p>
          <p>
            Мы объединяем специалистов разных направлений, чтобы помогать людям
            справляться с жизненными трудностями и находить внутреннюю опору.
          </p>
        </div>

        {/* История */}
        <div className='about-section'>
          <h2>Наша история и философия</h2>
          <p>
            Центр был создан как ответ на растущий запрос на качественную и
            профессиональную психологическую помощь в Москве.
          </p>
          <p>
            Мы придерживаемся принципа индивидуального подхода и строим работу
            на уважении, конфиденциальности и научной базе.
          </p>
        </div>
        {/* Визуальный блок */}
        <div className='about-visual'>
          <div className='about-visual__content'>
            <h2>Пространство доверия и спокойствия</h2>
            <p>
              Мы создаём атмосферу, в которой можно быть собой, говорить открыто
              и чувствовать поддержку.
            </p>
          </div>
        </div>
        {/* Ценности */}
        <div className='about-section'>
          <h2>Наши ценности</h2>

          <div className='values-grid'>
            <div className='value-card'>
              <h3>Конфиденциальность</h3>
              <p>Мы гарантируем полную защиту личной информации.</p>
            </div>

            <div className='value-card'>
              <h3>Индивидуальный подход</h3>
              <p>Каждая консультация строится с учётом ваших особенностей.</p>
            </div>

            <div className='value-card'>
              <h3>Профессионализм</h3>
              <p>Работаем только с дипломированными специалистами.</p>
            </div>

            <div className='value-card'>
              <h3>Безоценочность</h3>
              <p>Мы создаём безопасное и принимающее пространство.</p>
            </div>
          </div>
        </div>

        {/* Принципы */}
        <div className='about-section'>
          <h2>Принципы работы</h2>
          <ul className='principles-list'>
            <li>Регулярная профессиональная супервизия</li>
            <li>Этические стандарты психологической помощи</li>
            <li>Структурированная работа с запросом клиента</li>
            <li>Поддержка на каждом этапе взаимодействия</li>
          </ul>
        </div>

        {/* Галерея */}
        <div className='about-section'>
          <h2>Наше пространство</h2>

          <div className='about-gallery'>
            <div
              className='about-gallery__item'
              onClick={() => setActiveImage(center)}
            >
              <img src={center} alt='Пространство' />
            </div>
            <div
              className='about-gallery__item'
              onClick={() => setActiveImage(center)}
            >
              <img src={center} alt='Пространство' />
            </div>
            <div
              className='about-gallery__item'
              onClick={() => setActiveImage(center)}
            >
              <img src={center} alt='Пространство' />
            </div>
            <div
              className='about-gallery__item'
              onClick={() => setActiveImage(center)}
            >
              <img src={center} alt='Пространство' />
            </div>
          </div>
        </div>
        {activeImage && (
          <div className='gallery-modal' onClick={() => setActiveImage(null)}>
            <div className='gallery-modal__content'>
              <img src={activeImage} alt='Просмотр' />
              <button
                className='gallery-modal__close'
                onClick={() => setActiveImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Команда */}
        <div className='about-section about-team'>
          <h2>Наша команда</h2>
          <p>
            В центре работают специалисты с различным опытом и направлениями,
            что позволяет подобрать наиболее подходящего психолога под ваш
            запрос.
          </p>

          <Link to='/specialists' className='btn btn--primary'>
            Познакомиться со специалистами
          </Link>
        </div>
      </div>
    </section>
  )
}
