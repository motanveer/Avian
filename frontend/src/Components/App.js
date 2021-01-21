import styles from './App.module.css'
import logo from '../Assets/Logo.svg'

import Search from './Search/Search.js'
import Progress from './Progress/Progress.js'


import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div className={styles.Container}>

                <div className={styles.Header_Area}>
                    <img className={styles.Logo} src={logo} />
                </div>

                <div className={styles.Search_Area}>
                    <Search/>
                </div>

                <div className={styles.Progress_Area}>
                    <Progress/>
                </div>

            </div>
        )
    }
}

export default App
