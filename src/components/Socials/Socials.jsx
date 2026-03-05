import tg from '../../assets/icons/tg.svg'
import vk from '../../assets/icons/vk.svg'
import wa from '../../assets/icons/wa.svg'

const Socials = ({ className }) => {
  return (
    <div className={className}>
      <a href='#'>
        <img src={tg} alt='Telegram' />
      </a>

      <a href='#'>
        <img src={vk} alt='VK' />
      </a>

      <a href='#'>
        <img src={wa} alt='WhatsApp' />
      </a>
    </div>
  )
}

export default Socials
