import {Component} from 'react'
import './index.css'
import {Redirect} from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Header from '../Header'

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userImage: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      dateOfBirth: '',
      address: '',
      mobileNumber: '',
      isRegisterd: false,
    }
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
      isRegisterd,
    } = this.state

    if (
      (firstName ||
        lastName ||
        email ||
        password ||
        dateOfBirth ||
        address ||
        mobileNumber) === ''
    ) {
      alert('Please Enter Valid Details')
    } else {
      const newUserData = {
        id: new Date().getTime().toString(),
        userImage,
        firstName,
        lastName,
        email,
        password,
        dateOfBirth,
        address,
        mobileNumber,
        isRegisterd,
      }

      emailjs
        .send(
          'service_mwr1m1g',
          'template_4fszffo',
          {
            userImage: newUserData.userImage,
            firstName: newUserData.firstName,
            lastname: newUserData.lastName,
            email: newUserData.email,
            DateofBirth: newUserData.dateOfBirth,
            address: newUserData.address,
            mobileNumber: newUserData.mobileNumber,
          },
          'KZJVUQ_aPMo05bF8G',
        )
        .then(
          result => {
            console.log(result.text)
          },
          error => {
            console.log(error.text)
          },
        )

      if (localStorage.getItem('UserDetails')) {
        const oldUsers = JSON.parse(localStorage.getItem('UserDetails'))
        const allUsers = [...oldUsers, newUserData]
        localStorage.setItem('UserDetails', JSON.stringify(allUsers))
      } else {
        localStorage.setItem('UserDetails', JSON.stringify([newUserData]))
      }
      console.log(localStorage.getItem('UserDetails'))

      this.setState({isRegisterd: true})
    }
  }

  render() {
    const {isRegisterd} = this.state
    console.log(isRegisterd)

    return isRegisterd ? (
      <Redirect to="/login" />
    ) : (
      <>
        <Header />
        <div className="register-main-div">
          <form className="register-form" onSubmit={this.onSubmitForm}>
            <div className="main-head-div">
              <h1>Register Here</h1>
            </div>
            <input
              className="file-input"
              onClick={this.userPhoto}
              type="file"
            />
            <input
              name="message"
              className="register-input"
              onChange={this.onChangeFirstName}
              placeholder="Firstname"
              type="text"
            />
            <input
              name="lastName"
              className="register-input"
              onChange={this.onChangeLastName}
              placeholder="Lastname"
              type="text"
            />
            <input
              name="email"
              className="register-input"
              onChange={this.emailState}
              placeholder="Email"
              type="email"
            />
            <input
              name="firstName"
              className="register-input"
              onChange={this.onChangePassword}
              placeholder="Password"
              type="password"
            />
            <input
              className="register-input"
              onChange={this.onChangeDob}
              type="date"
              id="start"
              name="dateOfBirth"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
            <input
              name="address"
              className="register-input"
              onChange={this.onChangeAddress}
              placeholder="Address"
              type="text"
            />
            <input
              name="mobileNumber"
              className="register-input"
              onChange={this.onChangeNumber}
              placeholder="Mobile"
              type="number"
            />
            <div className="button-div">
              <button name="send" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default RegisterForm
