import { Link } from 'react-router-dom'
import './Header.scss'
import logo from '../../assets/logo.svg'

import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import wa from '../../assets/icons/wa.svg'

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        {/* LEFT BLOCK */}
        <div className='header__brand'>
          <Link to='/' className='header__logo'>
            <img src={logo} alt='Solt' />
          </Link>
        </div>

        {/* CENTER NAV */}
        <nav className='header__nav'>
          <Link to='/about' className='header__link'>
            О центре
          </Link>

          <Link to='/categories' className='header__link'>
            Категории
          </Link>

          <Link to='/services' className='header__link'>
            Услуги
          </Link>

          <Link to='/specialists' className='header__link'>
            Специалисты
          </Link>

          <Link to='/blog' className='header__link'>
            Статьи
          </Link>

          <Link to='/contacts' className='header__link'>
            Контакты
          </Link>
        </nav>

        {/* RIGHT BLOCK */}
        <div className='header__actions'>
          {/* SOCIALS */}
          <div className='header__socials'>
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

          <button className='btn'>Записаться</button>
        </div>
      </div>
    </header>
  )
}

export default Header
