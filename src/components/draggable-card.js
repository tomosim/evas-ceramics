import React from "react";
import Draggable from 'react-draggable';

import * as styles from './draggable-card.module.css';

class DraggableCard extends React.Component {

    render() {
        return (
            <Draggable handle=".handle" {...this.props}>
                <div className={styles.card}>
                    <div className={`handle ${styles.handle}`}>
                        drag me
                    </div>
                    <p className={styles.text}>{this.props.children}</p>
                </div>
            </Draggable>
        )
    }
};

export default DraggableCard;