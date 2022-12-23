import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class RegisterForm extends Component {
  state = {
    userImage: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    address: '',
    mobileNumber: '',
    userDetailsArray: [],
  }

  userPhoto = event => {
    this.setState({userImage: event.target.value})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  emailState = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeDob = event => {
    this.setState({dateOfBirth: event.target.value})
  }

  onChangeAddress = event => {
    this.setState({address: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({mobileNumber: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      userImage,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      address,
      mobileNumber,
      userDetailsArray,
    } = this.state

    const newUserData = {
      id: uuidv4(),
      userImage,
      firstName,
      lastName,
      email,
      password,
      dateOfBirth,
      address,
      mobileNumber,
    }

    this.setState(prevState => ({
      userDetailsArray: [...prevState.userDetailsArray, newUserData],
    }))

    localStorage.setItem('UserDetails', JSON.stringify(userDetailsArray))
  }

  render() {
    const {userDetailsArray} = this.state

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input onClick={this.userPhoto} type="file" /> <br />
          <input
            onChange={this.onChangeFirstName}
            placeholder="Firstname"
            type="text"
          />
          <br />
          <input
            onChange={this.onChangeLastName}
            placeholder="Lastname"
            type="text"
          />
          <br />
          <input onChange={this.emailState} placeholder="Email" type="email" />
          <br />
          <input
            onChange={this.onChangePassword}
            placeholder="Password"
            type="password"
          />
          <br />
          <input
            onChange={this.onChangeDob}
            type="date"
            id="start"
            name="trip-start"
            value="2018-07-22"
            min="2018-01-01"
            max="2018-12-31"
          />
          <br />
          <input
            onChange={this.onChangeAddress}
            placeholder="Address"
            type="text"
          />
          <br />
          <input
            onChange={this.onChangeNumber}
            placeholder="Mobile"
            type="number"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RegisterForm
