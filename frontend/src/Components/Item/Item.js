import React, { Component } from 'react'
import styles from './Item.module.css'

export class Item extends Component {
  
    constructor(props)
    state={
        class: styles.Container
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.state.class}>
                <p className={styles.Resource_Title}>{this.props.title}</p>
                <p className={styles.Resource_Size}>{this.props.size}</p>
            </button>
        )
    }

    handleClick = (e) =>{
        if (this.state.class === styles.Container){
            this.setState({class: styles.Container_Active})
        } 
        else{
            this.setState({class: styles.Container})
        }
    }

}

export default Item
