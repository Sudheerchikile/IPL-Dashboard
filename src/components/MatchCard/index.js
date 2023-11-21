// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = details
  const check = 'Won'
  const colour = matchStatus === check ? 'green' : 'red'
  return (
    <li className="card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={colour}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
