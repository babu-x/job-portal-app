import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

class Header extends Component {
  logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="nav-items-container-lg">
          <button type="button" className="nav-item">
            Home
          </button>
          <button type="button" className="nav-item">
            Jobs
          </button>
        </div>
        <button
          type="button"
          className="logout-btn"
          onClick={this.logoutButton}
        >
          Logout
        </button>
        <div className="nav-items-container-sm">
          <AiFillHome className="nav-icon" />
          <BsFillBriefcaseFill className="nav-icon" />
          <FiLogOut className="nav-icon" onClick={this.logoutButton} />
        </div>
      </nav>
    )
  }
}

export default withRouter(Header)
