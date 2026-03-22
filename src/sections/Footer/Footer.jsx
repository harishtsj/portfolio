import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} Harish T S J<br />
        All Rights Reserved
        </p>

    </section>
  )
}

export default Footer