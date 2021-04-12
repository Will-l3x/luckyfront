import React from 'react'
import {useState } from 'react'
import JSONDATA from './MOCK_DATA.json'
import './Search.css'
function SearchBar() {
    const [searchTerm, setSearchterm] = useState('')
    return (
        <div>
            <input type = "text" placeholder = "Search....." onChange={event =>{setSearchterm(event.target.value)}}/>
            {JSONDATA.filter((val)=>{
                if (searchTerm == ""){
                    return val
                }else if (val.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val
                }
            }).map((val, key)=>{
                return <div className="user" key={key}>
                    <p>{val.first_name}</p>
                    </div>
            })}
        </div>
    )
}

export default SearchBar
