import { useState } from 'react'
import './bookingForm.scss'

const BookingForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    service: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const BOT_TOKEN = '8632622350:AAEAa5oJglSohNUEjJkQDQzqmDXlfwuq_JE'
    const CHAT_ID = '-5021611160'

    const text = `
📩 Новый вопрос с сайта

👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
📧 Email: ${formData.email}
📝 Сообщение: ${formData.message}

🌐 Страница: ${window.location.href}
`

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
        }),
      })

      alert('Спасибо! Мы свяжемся с вами.')

      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        service: '',
      })

      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      alert('Ошибка отправки. Попробуйте позже.')
    }
  }

  return (
    <form className='booking-form' onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Ваше имя *'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type='tel'
        name='phone'
        placeholder='Ваш телефон *'
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <input
        type='email'
        name='email'
        placeholder='Ваш Email'
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        name='message'
        placeholder='Комментарий *'
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button type='submit' className='btn btn--primary'>
        Отправить
      </button>
    </form>
  )
}

export default BookingForm
