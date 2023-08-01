import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './home.module.css'

const Home = ()=> {
    return <>
        <StaticImage src="../../static/images/Element3.png" alt="ceramic fragment" className={`${styles.image} ${styles.topRight}`} />
        <StaticImage src="../../static/images/Element4.png" alt="ceramic fragment" className={`${styles.image} ${styles.bottomRight}`} />
        <StaticImage src="../../static/images/Element2.png" alt="ceramic fragment" className={`${styles.image} ${styles.topLeft}`} />
        <StaticImage src="../../static/images/Element1.png" alt="ceramic fragment" className={`${styles.image} ${styles.bottomLeft}`} />
        <StaticImage src="../../static/images/Logo.png" alt="ceramic fragment" className={`${styles.image} ${styles.logo}`} />
    </>
}

export default Home;