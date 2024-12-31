import React from 'react'
import './search.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  return (
    <div className='Searchbar-Container'>
        <FontAwesomeIcon icon={faSearch} className='searchIcon'/>
        <div className='input-container p-2'>
            <input placeholder='Search' className='h-full '/>
        </div>
    </div>
  )
}

export default SearchBar