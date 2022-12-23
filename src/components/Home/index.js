import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  if (currentUser === null) {
    return <Redirect to="/register" />
  }
  return (
    <>
      <Header />
      <div>
        <h1>Home Page</h1>
      </div>
    </>
  )
}

export default Home
