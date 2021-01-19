import styles from './App.module.css'
import logo from '../Assets/Logo.svg'


import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <div className={styles.Header}>
                    <img className={styles.Logo} src={logo} />
                </div>
            </div>
        )
    }
}

export default App
