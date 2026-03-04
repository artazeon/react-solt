import { Link } from 'react-router-dom'
import { services } from '../../data/servicesData'
import './services.scss'

const Services = () => {
  return (
    <section className='services-page'>
      <div className='container'>
        <h1>Наши услуги</h1>

        <div className='services-grid'>
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className='service-card'
            >
              <img src={service.image} alt={service.title} />

              <div className='service-content'>
                <h3>{service.title}</h3>
                <p>{service.format}</p>
                <span className='price'>{service.price}</span>

                <span className='btn btn--outline'>Подробнее</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
