import {Component} from 'react'
import {log} from 'util'

class Login extends Component {
  state = {
    email: '',
    password: '',
    storedCredArray: [],
  }

  emailState = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {email, password, registerUserData} = this.state

    const userDetailsFromLocalStorage = JSON.parse(
      localStorage.getItem('UserDetails'),
    )

    const data = userDetailsFromLocalStorage.map(each => ({
      storedEmail: each.email,
      storedPassword: each.password,
    }))
    // console.log(data)
    this.setState({storedCredArray: data})
  }

  render() {
    const {storedCredArray, passwodTrue, emailTrue} = this.state
    console.log(storedCredArray)

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.emailState} placeholder="Email" type="email" />
          <br />
          <input
            onChange={this.onChangePassword}
            placeholder="Password"
            type="password"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Login
