import React from 'react'
import Ceramic from './ceramic'
import * as styles from './ceramics-list.module.css'

const CeramicsList = ({ nodes }) => {
  return (
    <ul className={styles.list}>
      {nodes.map((node) => {
        return <Ceramic key={node.name} {...node} />
      })}
    </ul>
  )
}

export default CeramicsList
