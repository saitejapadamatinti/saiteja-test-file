import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
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
      </div>
    )
  }
}

export default Header
