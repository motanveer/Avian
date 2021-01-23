import React, { Component } from 'react'
import styles from './Item.module.css'

export class Item extends Component {
  

    render() {
        return (
            <button className={styles.Container}>
                <p className={styles.Resource_Title}>{this.props.title}</p>
                <p className={styles.Resource_Size}>{this.props.size}</p>
            </button>
        )
    }

}

export default Item
