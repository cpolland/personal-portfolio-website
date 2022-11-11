import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hi, I'm Cody Polland! What gives my life purpose is creating things
            I am passionate about. Whether those things be tangible things or
            digital things. I enjoy the creative process and the satisfaction of
            a finished product. My hobbies include crocheting, illustration,
            photography, sound design, sewing, and many more. I consider myself
            to be an extremely compassionate person and I connect with pretty
            much anyone who wants to connect with me. When I am not coding or
            crafting, you can find me spending time with my boyfriend and my dog
            Riley.
            <br></br>
            <br></br>I am a 29 year old web developer from Denver, Colorado and
            currently living in San Diego, CA. I attended university at Savannah
            College of Art and Design and have my certification in full-stack
            web development from The University of California San Diego UCSD. I
            studied full-stack web-dev but mainly focus on front-end development
            due to my love for design. I am knowledgable of both UI/UX Design. I
            am efficient in HTML, CSS, JavaScript, React, WordPress and I am
            familiar with a wide range of programs on the back-end. I love
            learning new programming languages and frame works when need be!
            <br></br>
            <br></br>
            If someone were to describe me they would say I am a jack of all
            trades. I thrive best in collaborative work environments and I am
            perseverant when it comes to the success of my team. I have been in
            Web Development for two years and strive to keep expanding my skill
            set.
            <br></br>
            <br></br>
            This app was created with: React - GSAP - FortAwesome - JavaScript -
            CSS with Sass.
          </p>
        </div>
        <div className="cube">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
