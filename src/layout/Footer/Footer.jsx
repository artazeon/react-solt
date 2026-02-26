import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import wa from '../../assets/icons/wa.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__brand'>
            <Link to='/' className='footer__logo'>
              <img src={logo} alt='Solt' />
            </Link>
            <p className='footer__description'>
              Центр психологической поддержки и индивидуальной терапии.
            </p>
            <div className='footer__socials'>
              <a href='#'>
                <img src={tg} alt='Telegram' />
              </a>
              <a href='#'>
                <img src={vk} alt='VK' />
              </a>
              <a href='#'>
                <img src={wa} alt='WhatsApp' />
              </a>
            </div>

            <button className='btn btn--outline footer__button'>
              Записаться
            </button>
          </div>

          <div className='footer__nav'>
            <h4 className='footer__title'>Навигация</h4>
            <ul className='footer__list'>
              <li>
                <Link to='/about' className='footer__link'>
                  О центре
                </Link>
              </li>
              <li>
                <Link to='/categories' className='footer__link'>
                  Категории
                </Link>
              </li>
              <li>
                <Link to='/services' className='footer__link'>
                  Услуги
                </Link>
              </li>
              <li>
                <Link to='/specialists' className='footer__link'>
                  Специалисты
                </Link>
              </li>
              <li>
                <Link to='/blog' className='footer__link'>
                  Статьи
                </Link>
              </li>
              <li>
                <Link to='/contacts' className='footer__link'>
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className='footer__contacts'>
            <h4 className='footer__title'>Контакты</h4>
            <p>Телефон: +375 (XX) XXX-XX-XX</p>
            <p>Email: info@solt.by</p>
            <p>Адрес: г. Минск</p>
          </div>
        </div>

        <div className='footer__bottom'>
          © {new Date().getFullYear()} Solt. Все права защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer
