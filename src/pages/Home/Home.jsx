import './Home.scss'
import { Link } from 'react-router-dom'
import HeroSlider from '../../components/HeroSlider/HeroSlider.jsx'
import centerImage from '../../assets/images/center.png'
import depression from '../../assets/images/categories/depression.jpg'
import relations from '../../assets/images/categories/relations.jpg'
import fears from '../../assets/images/categories/fears.jpg'

const categories = [
  {
    title: 'Депрессия',
    text: 'Потеря интереса, апатия, упадок сил.',
    image: depression,
  },
  {
    title: 'Отношения',
    text: 'Конфликты, кризисы, непонимание.',
    image: relations,
  },
  {
    title: 'Страхи и фобии',
    text: 'Тревожность, панические состояния.',
    image: fears,
  },
  {
    title: 'Депрессия',
    text: 'Потеря интереса, апатия, упадок сил.',
    image: depression,
  },
  {
    title: 'Отношения',
    text: 'Конфликты, кризисы, непонимание.',
    image: relations,
  },
  {
    title: 'Страхи и фобии',
    text: 'Тревожность, панические состояния.',
    image: fears,
  },
  {
    title: 'Депрессия',
    text: 'Потеря интереса, апатия, упадок сил.',
    image: depression,
  },
  {
    title: 'Отношения',
    text: 'Конфликты, кризисы, непонимание.',
    image: relations,
  },
]

const advantages = [
  {
    title: 'Индивидуальный подход',
    text: 'Работаем с каждым клиентом глубоко и с учётом личных особенностей.',
  },
  {
    title: 'Опытные специалисты',
    text: 'Психологи с практическим опытом и современными методами терапии.',
  },
  {
    title: 'Онлайн и офлайн',
    text: 'Вы можете выбрать удобный формат консультации.',
  },
  {
    title: 'Конфиденциальность',
    text: 'Полная безопасность и защита ваших личных данных.',
  },
]

// const categories = [
//   'Депрессия',
//   'Апатия',
//   'Отсутствие смысла',
//   'Измена',
//   'Навязчивые мысли / поведение',
//   'Низкая самооценка',
//   'Одиночество',
//   'Отношения с окружающими',
//   'Отношения с детьми / родителями',
//   'Потеря контроля над реакциями',
//   'Потеря близкого человека',
//   'Развод / расставание',
//   'Семейные проблемы',
//   'Страхи и фобии',
//   'Трудности в отношениях',
// ]

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
    </div>
  )
}

export default Home
