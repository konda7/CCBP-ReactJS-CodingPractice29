import './index.css'

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="header-container">
    <ul className="list-container">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
