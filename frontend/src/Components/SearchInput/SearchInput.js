import React from 'react'
import styles from './SearchInput.module.css'

export default function SearchInput(props) {
    return (
        
            <input onChange={props.handleChange} className={styles.Input} type="text"/>
    )
}
