import {BrowserRouter, Switch, Route} from 'react-router-dom'
import RegisterForm from './components/RegisterForm'
import Login from './components/Login'

import './App.css'

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/Register" component={RegisterForm} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
