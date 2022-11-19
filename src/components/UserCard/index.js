import Cookies from 'js-cookie'
import {Component} from 'react'
import './index.css'

class UserCard extends Component {
  state = {userDetails: []}

  componentDidMount() {
    this.getUserDetails()
  }

  getUserDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch('https://apis.ccbp.in/profile', options)
    const data = await response.json()
    const updatedData = {
      profileImageUrl: data.profile_details.profile_image_url,
      name: data.profile_details.name,
      shortBio: data.profile_details.short_bio,
    }
    this.setState({userDetails: updatedData})
  }

  render() {
    const {userDetails} = this.state
    const {name, shortBio, profileImageUrl} = userDetails
    return (
      <div className="profile-container">
        <img src={profileImageUrl} alt="profile" className="user-image" />
        <h1 className="user-title">{name}</h1>
        <p className="user-bio">{shortBio}</p>
      </div>
    )
  }
}

export default UserCard
