import LogoTitle from '../../assests/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          hi, <br /> I'm <img src={LogoTitle} alt="developer" />
          Cody
          <br />
          Web developer
        </h1>
        <h2>Frontend Developer / Designer</h2>
        <Link to="/contact" className="flat-button">
          Contact Me{' '}
        </Link>
      </div>
    </div>
  )
}

export default Home
