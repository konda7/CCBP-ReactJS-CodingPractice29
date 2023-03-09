import {Switch, Route} from 'react-router-dom'

import ProtectedRoutes from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoutes exact path="/" component={Home} />
    <ProtectedRoutes exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App
