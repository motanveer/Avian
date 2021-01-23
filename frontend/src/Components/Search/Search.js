import React, { Component } from 'react'
import styles from './Search.module.css'

import Item from '../Item/Item.js'

import data from '../../MOCK_DATA.json'



import SearchInput from '../SearchInput/SearchInput.js'

export class Search extends Component {

    state={
        resourceList: {}
    }


    render() {
        
        const resultData  = Object.entries(this.state.resourceList)
        const resultList  = resultData.map((resource, index) => { return <Item key={index.toString()} title={resource[1].filename} size={resource[1].size} />})

        return (
            <div className={styles.Container}>
                <div className={styles.Input_Group}>
                    <SearchInput handleChange={this.handleSearch}/>
                    <p class={styles.Search_Title}>SEARCH FOR A FILE</p>
                </div>

                <div className={styles.Results_Container}>
                {resultList}

                </div>
                {/*
                <Item  key="exampleA" title="Call of Duty: Black Ops II" size="24 GB"/>
                <Item  key="exampleB" title="God of War III" size="44 GB"/>
                <Item  key="exampleC" title="Naruto Ultimate Ninja Storm 2" size="14 GB"/>
                <Item  key="exampleD" title="Uncharted 2" size="32 GB"/>
                <Item  key="exampleE" title="Naruto Ultimate Ninja Storm 2" size="14 GB"/>
                */}

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
        
        if (Object.entries(filteredData).length === Object.entries(resourceData).length){
            this.setState({resourceList: {}})
        }else if(Object.entries(filteredData).length === 1718){
            this.setState({resourceList: {}})

        }
        
        //console.log(resultList)


        this.setState({resourceList: filteredData})
        //console.log(this.state.resourceList)
        //console.log(filteredData)

    }


    handleChange = (e) => {
        var test = data;

        test.forEach((resource, index, array) => {

            array[index].filename = resource.filename.replace(/_/g, ' ')
        })


        console.log(test)


        /*var result = test.filter(resource => {
            if (resource.filename.includes(e.target.value)) {
                return resource.filename
            }
        })*/

        //result.forEach(resource => console.log(resource.filename))
    }
}




export default Search
