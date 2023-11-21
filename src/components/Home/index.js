// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teams: [], isLoading: true}

  componentDidMount() {
    this.getTeams()
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="BallTriangle" color="#00Bfff" height={80} width={80} />
    </div>
  )

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamUrl: each.team_image_url,
    }))
    this.setState({
      teams: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teams, isLoading} = this.state
    return (
      <div className="bg-con" data-testid="loader">
        <div className="logo-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="all-teams-list">
            {teams.map(each => (
              <TeamCard details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
