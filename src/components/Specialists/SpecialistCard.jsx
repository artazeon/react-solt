import { Link } from 'react-router-dom'
import './specialists.scss'
import { useEffect, useRef, useState } from 'react'

const SpecialistCard = ({ specialist }) => {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`specialist-card ${visible ? 'visible' : ''}`}>
      <img src={specialist.image} alt={specialist.name} />
      <h3>{specialist.name}</h3>
      <p>{specialist.role}</p>
      <span>{specialist.experience}</span>

      <Link to={`/specialists/${specialist.id}`}>
        <button className='book-btn'>Записаться</button>
      </Link>
    </div>
  )
}

export default SpecialistCard
