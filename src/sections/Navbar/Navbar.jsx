// // import './navbar.css'
// import styles from './NavbarStyles.module.css'

// function Navbar() {
//   return (
//     <div className={styles.container}>
//       <nav className={styles.navbar}>
//         <div className={styles.logo}>Harish T S J</div>
//         <div className={styles.navItems}>
//           <ul>
//             <li><a href='#hero'>About</a></li>
//             <li><a href='#projects'>Projects</a></li>
//             <li><a href='#skills'>Skills</a></li>
//             <li><a href='#contact'>Contact</a></li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar

import { useState } from 'react'
import styles from './NavbarStyles.module.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>

        <div className={styles.logo}>Harish T S J</div>

        {/* Hamburger */}
        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Nav Items */}
        <div className={`${styles.navItems} ${isOpen ? styles.open : ''}`}>
          <ul>
            <li><a href='#hero' onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href='#projects' onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href='#skills' onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href='#contact' onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar