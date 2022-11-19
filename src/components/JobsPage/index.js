import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'
import UserCard from '../UserCard'
import './index.css'

class JobsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <Link to="jobs" className="job-page-link-item">
          <div className="filters-container">
            <UserCard />
          </div>
          <div className="jobs-container">
            <h1>right side</h1>
          </div>
        </Link>
      </>
    )
  }
}

export default JobsPage
