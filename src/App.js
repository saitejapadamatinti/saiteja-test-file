import React, {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import Profile from './components/UserProfile'

import './App.css'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const curr = localStorage.getItem('currentUser')
    if (curr) {
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
      return
    }

    setCurrentUser(null)
  }, [])

  const loginUser = user => {
    setCurrentUser(user)
    localStorage.setItem('currentUser', JSON.stringify(user))
  }

  const logoutUser = () => {
    setCurrentUser(null)
    localStorage.setItem('currentUser', null)
  }

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register">
            <RegisterForm />
          </Route>
          <Route exact path="/login">
            <Login
              loginUser={loginUser}
              logoutUser={logoutUser}
              setCurrentUser={setCurrentUser}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/profile">
            <Profile
              loginUser={loginUser}
              logoutUser={logoutUser}
              currentUser={currentUser}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
