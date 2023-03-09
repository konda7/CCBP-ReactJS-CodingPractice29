import './index.css'

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogoutBtn = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="logout-btn-container">
      <button type="button" onClick={onClickLogoutBtn}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
