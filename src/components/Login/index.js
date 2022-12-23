import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'
import Header from '../Header'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      isLogin: false,
    }
  }

  emailState = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = e => {
    e.preventDefault()
    const {email, password} = this.state
    let allUsersList = []
    if (localStorage.getItem('UserDetails')) {
      allUsersList = JSON.parse(localStorage.getItem('UserDetails'))
    }

    const requiredUser = allUsersList.find(eachUser => eachUser.email === email)
    console.log(requiredUser)

    if (!requiredUser) {
      alert('User not found')
      return
    }

    if (requiredUser.password !== password) {
      alert('Password not match.')
      return
    }

    this.setState({isLogin: true})

    const {loginUser} = this.props
    loginUser(requiredUser)
  }

  render() {
    const {isLogin} = this.state

    if (isLogin === true) {
      return <Redirect to="/profile" />
    }

    return (
      <>
        <Header />
        <div className="register-main-div">
          <form className="register-form" onSubmit={this.onSubmitForm}>
            <div className="main-head-div">
              <h1>Login</h1>
            </div>
            <input
              className="register-input"
              onChange={this.emailState}
              placeholder="Email"
              type="email"
            />
            <br />
            <input
              className="register-input"
              onChange={this.onChangePassword}
              placeholder="Password"
              type="password"
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    )
  }
}

export default Login
