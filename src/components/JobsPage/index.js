import {Component} from 'react'
import Header from '../Header'
import UserCard from '../UserCard'
import FiltersGroup from '../FiltersGroup'
import JobsDisplay from '../JobsDisplay'
import './index.css'

class JobsPage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="job-page-link-item">
          <div className="filters-container">
            <UserCard />
            <div className="hr-line">
              <hr />
            </div>
            <FiltersGroup />
            <div className="hr-line">
              <hr />
            </div>
          </div>
          <div className="jobs-container">
            <JobsDisplay />
          </div>
        </div>
      </>
    )
  }
}

export default JobsPage
