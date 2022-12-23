import {Component} from 'react'
import './index.css'

class Profile extends Component {
  state = {userProfileDetails: []}

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('UserDetails'))
    this.setState({userProfileDetails: data})
  }

  render() {
    const {userProfileDetails} = this.state
    console.log(userProfileDetails)

    return (
      <div>
        <div>
          <img />
          <div>
            <h1>{userProfileDetails.firstName}</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
