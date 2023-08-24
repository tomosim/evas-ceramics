import React from 'react'
import DraggableCard from '../components/draggable-card'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import useIsMobile from '../hooks/useIsMobile'

const randomGridPlacement = (isMobile, index) => {
  const width = typeof window !== 'undefined' ? window.innerWidth : 0

  if (isMobile) {
    return { x: width / 2 - 275 / 2, y: 30 + index * 40 }
  }

  let x = Math.random() * width
  const xLimit = width - 350
  if (x >= xLimit) x = x - 350
  if (x < 0) x = 0
  let y = Math.round(Math.random()) * 50
  const yLimit = width - 250
  if (y >= yLimit) y = y - 250

  return { x, y: isMobile ? 0 : y }
}

const About = ({ data }) => {
  const [isMobile] = useIsMobile()

  return (
    <>
      <Layout>
        {data.allContentfulAbout.nodes.map((node, i) => {
          return (
            <DraggableCard
              defaultPosition={randomGridPlacement(isMobile, i)}
              grid={[25, 25]}
            >
              {node.text}
            </DraggableCard>
          )
        })}
      </Layout>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query MyQuery {
    allContentfulAbout {
      nodes {
        text
      }
    }
  }
`
