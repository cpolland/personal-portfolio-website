import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../../assests/images/logo-s.png'
import logoSubtitle from '../../../assests/images/logo_sub.png'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
      <img src={logoSubtitle} alt="" />
    </Link>
  </div>
)

export default Sidebar
