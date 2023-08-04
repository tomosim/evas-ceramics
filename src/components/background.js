import React from 'react'
import * as styles from './background.module.css'

const Background = ({ children }) => {
  return <div className={styles.background}>{children}</div>
}

export default Background
