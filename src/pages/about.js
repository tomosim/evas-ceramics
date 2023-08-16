import React from 'react'
import DraggableCard from '../components/draggable-card'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import useIsMobile from '../hooks/useIsMobile'

const randomGridPlacement = (isMobile) => {
  // const height = window.innerHeight
  const width = window.innerWidth

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
        {data.allContentfulAbout.nodes.map((node) => {
          return (
            <DraggableCard
              defaultPosition={randomGridPlacement(isMobile)}
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
