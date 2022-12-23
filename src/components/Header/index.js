import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {isLogOut: false}

  logOutButton = () => {
    localStorage.removeItem('currentUser')
    this.setState({isLogOut: true})
  }

  render() {
    const {isLogOut} = this.state

    if (isLogOut === true) {
      return <Redirect to="/login" />
    }
    return (
      <div className="header-div">
        <span>
          <Link className="link-cls" to="/register">
            Register
          </Link>
        </span>
        <span>
          <Link className="link-cls" to="/login">
            Login
          </Link>
        </span>
        <span>
          <Link className="link-cls" to="/profile">
            Profile
          </Link>
        </span>
        <button onClick={this.logOutButton} type="button">
          Logut
        </button>
      </div>
    )
  }
}

export default Header
