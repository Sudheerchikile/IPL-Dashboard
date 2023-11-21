// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props

  const {
    competingTeam,
    competingTeamLogo,
    venue,
    umpires,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    date,
    result,
  } = details

  return (
    <div className="latest-match">
      <div className="sec-1">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="sec-2">
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>
      <div className="sec-3">
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
