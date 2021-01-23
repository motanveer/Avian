import React, { Component } from 'react'
import styles from './Search.module.css'

import data from '../../MOCK_DATA.json'



import SearchInput from '../SearchInput/SearchInput.js'

export class Search extends Component {
    
    render() {
        return (
            <div className={styles.Container}>
                <SearchInput handleChange={this.handleChange}/>
                <p class={styles.Search_Title}>SEARCH FOR A FILE</p>
            </div>
        )
    }
    
    
    handleChange = (e) =>{
        var test = data;
        
        test.forEach((resource, index, array) =>{
            
            array[index].filename = resource.filename.replace(/_/g,' ')
        }) 
     
     
     console.log(test)
     

      var result =  test.filter(resource =>{
            if(resource.filename.includes(e.target.value)){
                return resource.filename
            }
        })

    result.forEach(resource => console.log(resource.filename))
    }
}




export default Search
