import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import './categories.scss'

const Categories = () => {
  return (
    <section className='categories-page'>
      <div className='container'>
        <h1>Категории запросов</h1>

        <div className='categories-grid'>
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/categories/${category.id}`}
              className='category-card'
            >
              <div className='category-image'>
                <img src={category.image} alt={category.title} />
              </div>

              <div className='category-content'>
                <h3>{category.title}</h3>
                <p>{category.shortText}</p>

                <span className='btn btn--outline'>Подробнее →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
