import React from 'react';
import "../styles/About.css";
import aboutImg from "../images/about-img/about.jpg";
import { BsCheckCircle } from "react-icons/bs";

const About = () => {
  return (
    <section className='About'>
      <div className='Top'>
        <div className='Top-bg'>
        <div className='LeftSection'>
          <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
          <p className='LeftSection-p-1' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ul>
            <div className='L-s-li'>
              <li> 
                <i><BsCheckCircle /></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </li>
            </div>
            <div className='L-s-li'>
              <li> 
                <i><BsCheckCircle /></i> Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
            </div>
            <div className='L-s-li'><i><BsCheckCircle /></i>
              <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </li>
            </div>
          </ul>
          <p className='LeftSection-p-2'>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </div>
        <div className='RightSection'>
          <img src={aboutImg} alt='About us '></img>
        </div>
        </div>
      </div>
      <div className='Bottom'>
        <p className='Btm-h3'>Why Us</p>
        <p className='Btm-h2'>Why Choose Our Restaurant</p>
        <div className='AboutCards'>
          <div className='Card CardOne'>
            <h2>01</h2>
            <h3>Lorem Ipsum</h3>
            <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
          </div>
          <div className='Card CardTwo'>
            <h2>02</h2>
            <h3>Lorem Ipsum</h3>
            <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
          </div>
          <div className='Card CardThree'>
            <h2>03</h2>
            <h3>Lorem Ipsum</h3>
            <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;