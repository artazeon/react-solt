import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import Logo from '../../components/Logo/Logo'
import Socials from '../../components/Socials/Socials'
import { navigation } from '../../data/navigation'

const Header = ({ onBookingClick }) => {
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
            <Logo className='header__logo' />
          </div>

          {/* CENTER NAV */}
          <nav className='header__nav'>
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className='header__link'
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT BLOCK */}
          <div className='header__actions'>
            {/* SOCIALS */}
            <Socials className='header__socials' />

            <button className='btn' onClick={onBookingClick}>
              Записаться
            </button>
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
