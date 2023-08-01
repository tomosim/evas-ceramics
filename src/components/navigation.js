import React from 'react'
import { Link } from 'gatsby'
import MobileDropdownMenu from './mobile-dropdown-menu'

import useIsMobile from '../hooks/useIsMobile'

import * as styles from './navigation.module.css'

const Navigation = () => {
  const [isMobile] = useIsMobile()

  return isMobile ? (
    <MobileDropdownMenu />
  ) : (
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
  )
}

export default Navigation
