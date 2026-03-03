import { useState, useMemo } from 'react'
import { specialists } from '../../data/specialistsData'
import './specialists.scss'
import { Link } from 'react-router-dom'

const Specialists = () => {
  const [selectedFilter, setSelectedFilter] = useState('Все')

  const filters = useMemo(() => {
    const allDirections = specialists.flatMap((spec) => spec.directions || [])

    return ['Все', ...new Set(allDirections)]
  }, [])

  const filteredSpecialists = specialists.filter((spec) => {
    if (selectedFilter === 'Все') return true

    return spec.directions?.includes(selectedFilter)
  })

  return (
    <section className='specialists-page'>
      <div className='container'>
        <h1>Наши специалисты</h1>
        <div className='specialists-filters'>
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${
                selectedFilter === filter ? 'active' : ''
              }`}
              onClick={() => setSelectedFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className='specialists-grid'>
          {filteredSpecialists.map((item) => (
            <Link
              key={item.id}
              to={`/specialists/${item.id}`}
              className='specialist-card'
            >
              <div className='specialist-image'>
                <img src={item.image} alt={item.name} />
              </div>

              <div className='specialist-content'>
                <h3>{item.name}</h3>
                <span className='specialist-role'>{item.role}</span>

                <p>{item.experience}</p>
                <span
                  to={`/specialists/${item.id}`}
                  className='btn btn--outline'
                >
                  Подробнее
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialists
