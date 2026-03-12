import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import wa from '../../assets/icons/wa.svg'
import max from '../../assets/icons/max.svg'

const Socials = ({ className }) => {
  return (
    <div className={className}>
      <a
        href='https://t.me/oksanavazg'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={tg} alt='Telegram' />
      </a>

      {/* <a href='#' target='_blank' rel='noopener noreferrer'>
        <img src={vk} alt='VK' />
      </a> */}
      <a
        href='https://max.ru/oksanavazg'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={max} alt='VK' />
      </a>

      <a
        href='https://wa.me/79998252401'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={wa} alt='WhatsApp' />
      </a>
    </div>
  )
}

export default Socials
