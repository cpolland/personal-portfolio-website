import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assests/images/logo-s.png'
import logoSubtitle from '../../assests/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

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
      <NavLink
        exact="true"
        activeclassname="active"
        className={'about-link'}
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e " />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className={'contact-link'}
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e " />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/cody-polland-0a019b72/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/cpolland">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
