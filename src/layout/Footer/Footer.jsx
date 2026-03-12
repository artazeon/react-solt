import { Link } from 'react-router-dom'

import Logo from '../../components/Logo/Logo'
import Socials from '../../components/Socials/Socials'
import { navigation } from '../../data/navigation'
import './Footer.scss'

const Footer = ({ onBookingClick }) => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__top'>
          <div className='footer__brand'>
            <Logo className='footer__logo' />
            <p className='footer__description'>
              Центр психологической поддержки и индивидуальной терапии.
            </p>
            <Socials className='footer__socials' />
            <button
              className='btn btn--outline footer__button'
              onClick={onBookingClick}
            >
              Записаться
            </button>
          </div>

          <div className='footer__nav'>
            <h4 className='footer__title'>Навигация</h4>
            <ul className='footer__list'>
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className='footer__link'>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='footer__contacts'>
            <h4 className='footer__title'>Контакты</h4>
            <p>Телефон: +7 (999) 825-24-01</p>
            <p>Email: info@solt-psy.ru</p>
            <p>Адрес: г. Москва</p>
          </div>
        </div>

        <div className='footer__bottom'>
          © {new Date().getFullYear()} Психологический центр Solt. Все права
          защищены.
        </div>
      </div>
    </footer>
  )
}

export default Footer
