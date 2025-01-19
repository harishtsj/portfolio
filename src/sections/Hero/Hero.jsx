// import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Harish_CV.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon
    const  githubIcon = theme === 'light' ? githubLight : githubDark
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark

  return (
    <section id='hero' className= {styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt='profPic' />
            <img className={styles.colorMode} src={themeIcon} alt='Color mode icon' onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Harish T S J</h1>
            <h2>Front-End Developer</h2>
            <span>
                <a href='https://github.com/login' target='_blank'>
                    <img src={githubIcon} alt='Github Icon'/>
                </a>
                <a href='https://www.linkedin.com/in/harish-tsj/' target='_blank'>
                    <img src={linkedInIcon} alt='LinkedIn Icon' />
                </a>
            </span>
            <p className={styles.description}>
                With a passion for developing modern React web apps for commercial businesses
            </p>
            <a href={CV} download>
                <button className='hover'>
                    Resume
                </button>
            </a>
        </div>
    </section>
  )
}

export default Hero