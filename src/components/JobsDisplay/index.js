import {Component} from 'react'
import './index.css'

class JobsDisplay extends Component {
  render() {
    return (
      <>
        <div className="user-input-container">
          <input type="search" className="search-bar" placeholder="Search" />
        </div>
      </>
    )
  }
}
export default JobsDisplay
