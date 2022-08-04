import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../../assests/images/logo-s.png'
import logoSubtitle from '../../../assests/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesom/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img className="sub-logo" src={logoSubtitle} alt="" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e " />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e " />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e " />
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
