import React from 'react'
import './search.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className='Searchbar-Container'>
        <FontAwesomeIcon icon={faSearch} className='searchIcon'/>
        <div className='input-container'>
            <input placeholder='Search'/>
        </div>
    </div>
  )
}

export default SearchBar