import './hero.css'
import { Links } from '../../components/social_links/Links'
import Button from '../../components/button/Button'
import React from 'react'
import Typed from 'typed.js'
import { FaArrowCircleDown } from 'react-icons/fa'
import Logo from '../../assets/logo/logo-nath-white.png'

const Hero = ({ name, designation, greeting }) => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Fashion Designer',
        'CAD Designer',
        ' Fashion Illustrator',
        'Pattern Maker',
        'Technical Designer',
        ' Fashion Stylist',
        'Fashion Consultant',
        'Garment Technologist',
        'Accessory Designer',
        'Fashion Brand Manager',
        'Fashion Show Coordinator',
        'Grading and sizing',
        'Production Manager',
        'Quality Control Inspector',
        'Sample Maker',
        'Sewing Machinist',
        'Fashion Marketing Specialist',
        'Fashion PR Specialist',
        'Fashion Blogger/Influencer',
        'Fashion Journalist',
        'Trend Forecaster',
        'Sales Strategies',
        'Fabric Cutter',
        // ... (rest of your strings)
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
      showCursor: true,
      cursorChar: ']',
      autoInsertCss: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    }
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-section-content">
        <p>{greeting}</p>
        <h1>Work with <span>{'<'}  {name} {'/>'}</span></h1>
        <img src={Logo} className="hero-image" alt="hero" />
        <div className="designation">
          <span className="typed-cursor">[</span>
          <h3 ref={el}>{designation}</h3>
        </div>
      </div>
      <a href="#portfolio"><Button name={'my projects'} icon={<FaArrowCircleDown className="learn-more-icon" />} /></a>
      <Links />
    </section>
  );
}

Hero.defaultProps = {
  name: 'Chinaza Sunday',
  designation: 'Fashion Designer',
  greeting: 'hello world'
}

export default Hero;
