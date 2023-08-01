import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as styles from './ceramic.module.css'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Slider from 'react-slick'
import useIsMobile from '../hooks/useIsMobile'

const Ceramic = ({ name, specs, price, images }) => {
  const [isMobile] = useIsMobile()

  const settings = {
    arrows: !isMobile,
    accessibility: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    dotsClass: styles.dots,
  }

  return (
    <li key={name} className={styles.container}>
      <Slider {...settings}>
        {images.map((image) => (
          <GatsbyImage
            key={image.gatsbyImage.images.fallback.src}
            image={getImage(image.gatsbyImage)}
            alt="vase"
          />
        ))}
      </Slider>
      <ul className={styles.info}>
        <li className={styles.label}>{name}</li>
        <li className={styles.label}>{specs}</li>
        <li>{price}€</li>
      </ul>
    </li>
  )
}

export default Ceramic
