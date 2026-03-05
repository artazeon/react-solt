import { Link } from 'react-router-dom'

import logo from '../../assets/logo.svg'

const Logo = ({ className, link = true }) => {
  const content = <img src={logo} alt='Solt' />

  if (link) {
    return (
      <Link to='/' className={className}>
        {content}
      </Link>
    )
  }

  return <div className={className}>{content}</div>
}

export default Logo
