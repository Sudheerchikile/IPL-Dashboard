// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamUrl} = details
  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`}>
        <img src={teamUrl} alt={name} className="team-url" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
