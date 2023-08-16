import React from 'react'
import Draggable from 'react-draggable'

import * as styles from './draggable-card.module.css'

class DraggableCard extends React.Component {
  render() {
    return (
      <Draggable handle=".handle" {...this.props}>
        <div className={`${styles.card} handle`}>
          <p className={styles.text}>{this.props.children}</p>
        </div>
      </Draggable>
    )
  }
}

export default DraggableCard
