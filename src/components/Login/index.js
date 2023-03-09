import './index.css'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

const Login = props => {
  const onSuccesfulLogin = () => {
    const {history} = props
    history.replace('/')
  }

  const onClickLoginBtn = async () => {
    const apiUrl = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchData = await response.json()
      const jwtToken = fetchData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      onSuccesfulLogin(jwtToken)
      //   console.log(jwtToken)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login-container">
      <h1 className="heading">Please Login</h1>
      <button type="button" onClick={onClickLoginBtn}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
