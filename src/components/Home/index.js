import LogoTitle from '../../assests/images/logo-s.png'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          hi, <br /> I'm{' '}
        </h1>
        <img src={LogoTitle} alt="developer" />
      </div>
    </div>
  )
}

export default Home
