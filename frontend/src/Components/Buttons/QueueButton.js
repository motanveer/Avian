import {React, useState} from 'react'
import styles from './Button.module.css'

export default function QueueButton(props) {

    //const [className, setClass] = useState(styles.QueueButton)
    if(props.data.length > 0){
        return(<button className={styles.QueueButton_Active}>Queue ({props.data.length})</button>)
    }
    else{
        return(<button className={styles.QueueButton}>Queue</button>)
    }
}
