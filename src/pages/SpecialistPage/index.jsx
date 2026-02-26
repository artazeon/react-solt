import { useParams } from 'react-router-dom'
import { specialists } from '../../data/specialistsData'
import './specialistPage.scss'

const SpecialistPage = () => {
  const { id } = useParams()

  const specialist = specialists.find((spec) => spec.id === Number(id))

  if (!specialist) {
    return <h2>Специалист не найден</h2>
  }

  return (
    <section className='specialist-page'>
      <div className='container'>
        <div className='specialist-header'>
          <img src={specialist.image} alt={specialist.name} />

          <div>
            <h1>{specialist.name}</h1>
            <p className='role'>{specialist.role}</p>
            <p className='experience'>{specialist.experience}</p>
          </div>
        </div>

        <div className='specialist-description'>
          <h2>О специалисте</h2>
          <p>{specialist.description}</p>
        </div>
      </div>
    </section>
  )
}

export default SpecialistPage
