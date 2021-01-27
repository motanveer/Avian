import React, { Component } from 'react'
import styles from './Progress.module.css'
import openEye from './visible.svg'
import closedEye from './nonVisible.svg'

export class Progress extends Component {
    
    state ={
        display: {visible: false, className: styles.Container_Hidden, icon: openEye}
    }

    render() {
        return (
            <div className={this.state.display.className}>
                <img className={styles.icon} onClick={this.handleDisplay} width="50px" src={this.state.display.icon}/>
            </div>
        )
    }

    handleDisplay = () =>{
       if(this.state.display.visible){
       this.setState({display: {visible: false, className: styles.Container_Hidden, icon: openEye}})
       }
       else{
        this.setState({display: {visible: true, className: styles.Container_Active, icon: closedEye}})
       }
    }

}

export default Progress
