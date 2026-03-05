import { useParams, Link } from 'react-router-dom'

import { services } from '../../data/servicesData'
import './ServiceDetail.scss'

const ServiceDetail = () => {
  const { id } = useParams()

  const service = services.find((item) => item.id === id)

  if (!service) {
    return (
      <section className='service-detail'>
        <div className='container'>
          <h2>Услуга не найдена</h2>
          <Link to='/services' className='btn btn--outline'>
            ← Назад к услугам
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className='service-detail'>
      <div className='container'>
        <h1>{service.title}</h1>

        <div className='service-detail__image'>
          <img src={service.image} alt={service.title} />
        </div>

        <div className='service-detail__info'>
          <h2>Описание</h2>

          {service.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className='service-detail__meta'>
          <p>
            <strong>Формат:</strong> {service.format}
          </p>
          <p>
            <strong>Продолжительность:</strong> {service.duration}
          </p>
          <p>
            <strong>Периодичность:</strong> {service.frequency}
          </p>
          <p>
            <strong>Стоимость:</strong> {service.price}
          </p>
        </div>

        <button className='btn'>Записаться</button>

        <div style={{ marginTop: '30px' }}>
          <Link to='/services' className='btn btn--outline'>
            ← Вернуться к услугам
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
