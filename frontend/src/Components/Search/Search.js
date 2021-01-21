import React, { Component } from 'react'
import styles from './Search.module.css'

import data from '../../../MOCK_DATA.json'

import SearchInput from '../SearchInput/SearchInput.js'

export class Search extends Component {
    render() {
        return (
            <div className={styles.Container}>
                <p>Search for a file</p>
                <SearchInput handleChange={this.handleChange}/>
                <p>Button Inputs</p>
            </div>
        )
    }

    handleChange = (e) =>{
        console.log(e.target.value)
        console.log(data)
    }
}




export default Search
