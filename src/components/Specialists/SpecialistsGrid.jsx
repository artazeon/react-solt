import SpecialistCard from './SpecialistCard'
import './specialists.scss'

const SpecialistsGrid = ({ specialists }) => {
  return (
    <div className='specialists-grid'>
      {specialists.map((spec) => (
        <SpecialistCard key={spec.id} specialist={spec} />
      ))}
    </div>
  )
}

export default SpecialistsGrid
