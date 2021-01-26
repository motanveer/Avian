import React, { Component } from 'react'
import styles from './Item.module.css'

export class Item extends Component {
  
    constructor(props){super(props)}
    state={
        class: styles.Container
    }

    render() {
        return (
            <button onClick={this.handleClick} className={this.state.class}>
                <p className={styles.Resource_Title}>{this.props.data.filename}</p>
                <p className={styles.Resource_Size}>{this.bytesToSize(this.props.data.size)}</p>
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


    //Converts byte into closest unit
    bytesToSize = (bytes) => {

        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     }

}

export default Item
