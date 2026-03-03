import { Link } from 'react-router-dom'
import { blogData } from '../../data/blogData'
import './blog.scss'

const Blog = () => {
  return (
    <section className='blog-page'>
      <div className='container'>
        <h1>Статьи</h1>

        <div className='blog-grid'>
          {blogData.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className='blog-card'>
              <img src={post.image} alt={post.title} />

              <div className='blog-card__content'>
                <span className='blog-date'>{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <span className='btn btn--outline'>Подробнее</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
