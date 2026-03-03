import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'

import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import wa from '../../assets/icons/wa.svg'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('no-scroll', menuOpen)
    document.body.classList.toggle('no-scroll', menuOpen)

    return () => {
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpen])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {menuOpen && (
        <div className='header__overlay' onClick={() => setMenuOpen(false)} />
      )}
      <header className={`header ${menuOpen ? 'header--open' : ''}`}>
        <div className='header__container'>
          {/* LEFT BLOCK */}
          <div className='header__brand'>
            <Link to='/' className='header__logo'>
              <img src={logo} alt='Solt' />
            </Link>
          </div>

          {/* CENTER NAV */}
          <nav className='header__nav'>
            <Link
              to='/about'
              className='header__link'
              onClick={handleLinkClick}
            >
              О центре
            </Link>

            <Link
              to='/categories'
              className='header__link'
              onClick={handleLinkClick}
            >
              Категории
            </Link>

            <Link
              to='/services'
              className='header__link'
              onClick={handleLinkClick}
            >
              Услуги
            </Link>

            <Link
              to='/specialists'
              className='header__link'
              onClick={handleLinkClick}
            >
              Специалисты
            </Link>

            <Link to='/blog' className='header__link' onClick={handleLinkClick}>
              Статьи
            </Link>

            <Link
              to='/contacts'
              className='header__link'
              onClick={handleLinkClick}
            >
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
          <div
            className='header__burger'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
