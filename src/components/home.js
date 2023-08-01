import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import * as styles from './home.module.css'

const Home = () => {
  return (
    <>
      <StaticImage
        src="../../static/images/Element3.png"
        alt="ceramic fragment"
        className={styles.topRight}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      />
      <StaticImage
        src="../../static/images/Element4.png"
        alt="ceramic fragment"
        className={styles.bottomRight}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      />
      <StaticImage
        src="../../static/images/Element2.png"
        alt="ceramic fragment"
        className={styles.topLeft}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      />
      <StaticImage
        src="../../static/images/Element1.png"
        alt="ceramic fragment"
        className={styles.bottomLeft}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      />
      <StaticImage
        src="../../static/images/Logo.png"
        alt="ceramic fragment"
        className={styles.logo}
        style={{
          position: 'absolute',
          overflow: 'hidden',
          zIndex: '-1',
        }}
      />
    </>
  )
}

export default Home
