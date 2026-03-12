import { useState, useEffect, useRef } from 'react'
import './bookingModal.scss'

const BookingModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  })

  // Закрытие по клику вне окна
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   console.log('Заявка:', formData)

  //   alert('Спасибо! Заявка принята.')

  //   setFormData({
  //     name: '',
  //     phone: '',
  //     service: '',
  //     message: '',
  //   })

  //   onClose()
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const BOT_TOKEN = 'ТВОЙ_BOT_TOKEN'
    const CHAT_ID = 'ТВОЙ_CHAT_ID'

    const text = `
📩 Новая заявка с сайта

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
💬 Услуга: ${formData.service}
📝 Комментарий: ${formData.message}
Страница: ${window.location.href}
`

    try {
      await fetch(
        `https://api.telegram.org/bot${'8632622350:AAEAa5oJglSohNUEjJkQDQzqmDXlfwuq_JE'}/sendMessage`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '-5021611160',
            text: text,
          }),
        },
      )

      alert('Спасибо! Заявка отправлена.')

      setFormData({
        name: '',
        phone: '',
        service: '',
        message: '',
      })

      onClose()
    } catch (error) {
      alert('Ошибка отправки. Попробуйте позже.')
    }
  }

  if (!isOpen) return null

  return (
    <div className='booking-overlay'>
      <div className='booking-modal' ref={modalRef}>
        <button className='booking-close' onClick={onClose}>
          ✕
        </button>

        <h2>Записаться</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Ваше имя'
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type='tel'
            name='phone'
            placeholder='Телефон'
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name='service'
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value=''>Выберите услугу</option>
            <option value='online'>Онлайн консультация</option>
            <option value='offline'>Очно</option>
          </select>

          <textarea
            name='message'
            placeholder='Комментарий'
            value={formData.message}
            onChange={handleChange}
          />

          <button type='submit' className='btn btn--primary'>
            Отправить
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookingModal
