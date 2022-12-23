import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Profile = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  if (currentUser === null) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div>
        <h1>User Profile</h1>
        <div>
          <img />
          <div>
            <h1>First Name : {currentUser.firstName}</h1>
            <h1>Last Name : {currentUser.lastName}</h1>
            <h1>Email Id : {currentUser.email}</h1>
            <h1>Mobile Number :{currentUser.mobileNumber}</h1>
            <h1>Date of Birth : {currentUser.dateOfBirth}</h1>
            <h1>Address : {currentUser.address}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
