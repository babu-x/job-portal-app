import {Link} from 'react-router-dom'
import {Component} from 'react'
import {HomepageBackground} from '../StyledComponents'
import Header from '../Header'
import './index.css'

class HomePage extends Component {
  render() {
    return (
      <Link to="/" className="link-item">
        <HomepageBackground>
          <Header />
          <div className="home-page-banner-section">
            <h1 className="home-page-title">
              Find The Job That Fits Your Life
            </h1>
            <p className="home-page-description">
              Millions of people are searching of jobs, salary information,
              company reviews. Find the job that fits your abilities and
              potential
            </p>
            <button className="find-job-btn" type="button">
              Find Jobs
            </button>
          </div>
        </HomepageBackground>
      </Link>
    )
  }
}

export default HomePage
