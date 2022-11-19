import Header from '../Header'
import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        className="not-found-img"
      />
      <h1 className="not-found-title">Page Not Found</h1>
      <p className="not-found-description">
        We&apos; re sorry, the page requested we could not be found.
      </p>
    </div>
  </>
)

export default NotFound
