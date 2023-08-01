import React from 'react'
import DraggableCard from '../components/draggable-card'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const About = () => (
  <>
    <Layout>
      <DraggableCard defaultPosition={{ x: 50, y: 80 }} grid={[25, 25]}>
        Hello my name is tom
      </DraggableCard>
      <DraggableCard defaultPosition={{ x: 400, y: 100 }} grid={[25, 25]}>
        Welcome to my website
      </DraggableCard>
      <DraggableCard defaultPosition={{ x: 100, y: 50 }} grid={[25, 25]}>
        Pls buy my stuff
      </DraggableCard>
    </Layout>
  </>
)

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
