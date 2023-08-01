import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import CeramicsList from '../components/ceramics-list'

const CeramicsPage = ({ data }) => {
  return (
    <Layout>
      <CeramicsList nodes={data.allContentfulProduct.nodes} />
    </Layout>
  )
}

export default CeramicsPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulProduct {
      nodes {
        name
        specs
        price
        images {
          gatsbyImage(width: 480, placeholder: DOMINANT_COLOR)
        }
      }
    }
  }
`
