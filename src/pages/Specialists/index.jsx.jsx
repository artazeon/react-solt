import { specialists } from '../../data/specialistsData'
import './specialists.scss'
import { Link } from 'react-router-dom'

const Specialists = () => {
  return (
    <section className='specialists-page'>
      <div className='container'>
        <h1>Наши специалисты</h1>

        <div className='specialists-grid'>
          {specialists.map((item) => (
            <div key={item.id} className='specialist-card'>
              <div className='specialist-image'>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='specialist-content'>
                <h3>{item.name}</h3>
                <span className='specialist-role'>{item.role}</span>

                <p>{item.experience}</p>

                <Link
                  to={`/specialists/${item.id}`}
                  className='btn btn--outline'
                >
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialists
