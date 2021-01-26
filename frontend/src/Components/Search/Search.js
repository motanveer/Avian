import React, { Component } from 'react'
import styles from './Search.module.css'

import Item from '../Item/Item.js'

import data from '../../MOCK_DATA.json'



import SearchInput from '../SearchInput/SearchInput.js'

export class Search extends Component {

    state={
        resourceList: {},
        selectedResorces: [] 
    }


    render() {
        
        const resultData  = Object.entries(this.state.resourceList)
        var resultList  = resultData.map((resource, index) => { return <Item key={index.toString()} title={resource[1].filename} size={this.bytesToSize(resource[1].size)}  />})
        

        //If the result of the query is all results, then display nothing
        console.log(resultList.length)
        if(resultList.length == data.length){
            resultList = [];
        }


        return (
            <div className={styles.Container}>
                <div className={styles.Input_Group}>
                    <SearchInput handleChange={this.handleSearch}/>
                    <p class={styles.Search_Title}>SEARCH FOR A FILE</p>
                </div>

                <div className={styles.Results_Container}>
                {resultList}
                </div>
            </div>
        )
    }

    
    handleSearch = (e) =>{

        var resourceData = data;

        //Take list of files and then change the naming convention:

        resourceData.forEach((resource, index, array) =>{
            array[index].filename = resource.filename.replace(/_/g, ' ')
        })
        
        //Filter search results
        var filteredData = resourceData.filter(resource =>{
            if(resource.filename.toLowerCase().includes(e.target.value.toLowerCase())){
                return resource.filename;
            }
        })

        console.log(Object.entries(this.state.resourceList).length)
       

        this.setState({resourceList: filteredData})
        //console.log(this.state.resourceList)
        //console.log(filteredData)
    }

        bytesToSize = (bytes) => {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
     }
}


export default Search
