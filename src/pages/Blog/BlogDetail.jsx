import { useParams } from 'react-router-dom'
import { blogData } from '../../data/blogData'
import './blogDetail.scss'

const BlogDetail = () => {
  const { id } = useParams()

  const post = blogData.find((item) => item.id === Number(id))

  if (!post) return <p>Статья не найдена</p>

  return (
    <section className='blog-detail'>
      <div className='container'>
        <h1>{post.title}</h1>
        <span className='blog-date'>{post.date}</span>

        <div className='blog-detail__content'>
          <img
            src={post.image}
            alt={post.title}
            className='blog-detail__image'
          />

          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogDetail
