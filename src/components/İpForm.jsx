import React from 'react'
import {useState} from "react";
import İpİnfo from "./İpİnfo"
import {ipContext} from "../context/ipContext"
import { useContext } from 'react'
import arrow from "../images/icon-arrow.svg"
function İpForm() {
    const [input,setİnput]=useState("")
    const {search,setSearch}=useContext(ipContext)
    console.log(search)
    const handleChange=(e)=>{
        setİnput(e.target.value)
        console.log(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearch(input)
    }
    return (
        <div className='container'>
            <div className='ip-form'>
                <h1>IP Address Tracker</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Search for any IP address or domain' onChange={(e)=>handleChange(e)} />
                    <button><img src={arrow} alt="" /></button>
                </form>
            </div>
            <İpİnfo/>
        </div>
    )
}

export default İpForm

