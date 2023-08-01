import { Link } from 'gatsby'
import React, { useState } from 'react'

import * as styles from './navigation.module.css'

const MobileDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <nav role="navigation" className={styles.navigation} aria-label="Main">
      <span>
        <Link to="/" className={styles.navigationItem}>
          Home
        </Link>
      </span>
      <span>
        <Link
          to="/about"
          className={styles.navigationItem}
          activeClassName="active"
        >
          About
        </Link>
        <Link
          to="/ceramics"
          className={styles.navigationItem}
          activeClassName="active"
        >
          Ceramics
        </Link>
      </span>
    </nav>
  ) : (
    <nav>
      <button onClick={() => setIsOpen(true)}>Menu</button>
    </nav>
  )
}

export default MobileDropdownMenu
