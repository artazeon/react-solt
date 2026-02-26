import './Specialists.scss'
import { Link } from 'react-router-dom'
import { specialists } from '../../data/specialists'

const Specialists = () => {
  return (
    <div className='specialists'>
      <div className='specialists__container'>
        <h1 className='specialists__title'>Наши специалисты</h1>

        <p className='specialists__text'>
          Команда профессиональных психологов, которые помогают справляться с
          трудностями и находить внутреннюю опору.
        </p>

        <div className='specialists__grid'>
          {specialists.map((item, index) => (
            <div key={index} className='specialists__card'>
              <div className='specialists__image'>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='specialists__content'>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
                <p>{item.text}</p>

                <Link to={`/specialists/${index}`} className='btn btn--outline'>
                  Подробнее
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Specialists
