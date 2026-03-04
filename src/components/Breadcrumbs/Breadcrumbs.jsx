import { Link, useLocation } from 'react-router-dom'
import { categories } from '../../data/categories'
import { services } from '../../data/servicesData'
import { specialists } from '../../data/specialistsData'
import { blogData } from '../../data/blogData'

import './breadcrumbs.scss'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)

  if (pathnames.length === 0) return null

  const getName = (segment, index) => {
    const staticPages = {
      about: 'О центре',
      contacts: 'Контакты',
      blog: 'Статьи',
      categories: 'Категории',
      services: 'Услуги',
      specialists: 'Специалисты',
    }

    // Статические страницы
    if (staticPages[segment]) {
      return staticPages[segment]
    }

    // Категории (id строковые)
    if (pathnames[index - 1] === 'categories') {
      const category = categories.find((c) => c.id === segment)
      return category ? category.title : 'Категория'
    }

    // Услуги (id строковые)
    if (pathnames[index - 1] === 'services') {
      const service = services.find((s) => s.id === segment)
      return service ? service.title : 'Услуга'
    }

    // Специалисты (id числовые!)
    if (pathnames[index - 1] === 'specialists') {
      const specialist = specialists.find((s) => String(s.id) === segment)
      return specialist ? specialist.name : 'Специалист'
    }

    // Статьи (id числовые!)
    if (pathnames[index - 1] === 'blog') {
      const article = blogData.find((a) => String(a.id) === segment)
      return article ? article.title : 'Статья'
    }

    return segment
  }

  return (
    <div className='breadcrumbs'>
      <div className='container'>
        <Link to='/'>Главная</Link>

        {pathnames.map((segment, index) => {
          const to = '/' + pathnames.slice(0, index + 1).join('/')
          const isLast = index === pathnames.length - 1
          const name = getName(segment, index)

          return isLast ? (
            <span key={to}> / {name}</span>
          ) : (
            <span key={to}>
              {' '}
              / <Link to={to}>{name}</Link>
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default Breadcrumbs
