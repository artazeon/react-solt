import { useParams } from 'react-router-dom'
import { categories } from '../../data/categories'
import './сategoryDetail.scss'

const CategoryDetail = () => {
  const { id } = useParams()

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
      </div>
    </section>
  )
}

export default CategoryDetail
