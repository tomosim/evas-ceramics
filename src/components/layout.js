import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Background from './background'

import * as styles from './layout.module.css'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <Background>
        <Seo />
        <Navigation />
        <main className={styles.main}>{children}</main>
      </Background>
    )
  }
}

export default Template
