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

        //Handle selection of an item:

        if (this.state.class === styles.Container){
            this.setState({class: styles.Container_Active})
            this.props.handleAction[0](this.props.data)
        } 
        
        //Handle deselction of an item:

        else{
            this.setState({class: styles.Container})
            this.props.handleAction[1](this.props.data)
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
