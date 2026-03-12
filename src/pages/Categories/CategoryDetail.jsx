import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { categories } from '../../data/categories'
import { specialists } from '../../data/specialistsData'
import './сategoryDetail.scss'

const CategoryDetail = () => {
  const { id } = useParams()

  const filteredSpecialists = specialists.filter((spec) =>
    spec.directions.includes(id),
  )

  const category = categories.find((item) => item.id === id)

  if (!category) {
    return (
      <section className='categories-page'>
        <div className='container'>
          <h2>Категория не найдена</h2>
        </div>
      </section>
    )
  }

  return (
    <section className='category-detail'>
      <div className='container'>
        <h1>{category.title}</h1>

        <div className='category-detail__image'>
          <img src={category.image} alt={category.title} />
        </div>

        <div className='category-detail__block'>
          <h2>Описание</h2>
          {category.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className='category-detail__block'>
          <h2>С чем помогает</h2>
          <ul>
            {category.helpsWith.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='category-detail__block'>
          <h2>Примеры ситуаций</h2>
          <ul>
            {category.situations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='category-specialists'>
          <h2>Подходящие специалисты</h2>

          {filteredSpecialists.length > 0 ? (
            <div className='category-specialists__grid'>
              {filteredSpecialists.map((spec) => (
                <Link
                  key={spec.id}
                  to={`/specialists/${spec.id}`}
                  className='category-specialists__card'
                >
                  <img src={spec.image} alt={spec.name} />

                  <div className='category-specialists__content'>
                    <h4>{spec.name}</h4>
                    <span>{spec.role}</span>

                    <p>{spec.experience}</p>

                    <span className='btn btn--outline'>Подробнее</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p>Пока нет специалистов</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default CategoryDetail
