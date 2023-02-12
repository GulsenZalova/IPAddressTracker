import { createContext, useContext, useState, useEffect } from "react";
export const ipContext=createContext(null)
export const IpContext=({children})=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [search,setSearch]=useState("")
    console.log(search)
    useEffect(()=>{
        setLoading(true)
        fetch(`https://ipapi.co/${search}/json/`)
        .then(res=>res.json())
        .then(info=>{
            setData(info)
            console.log(info)
            setLoading(false)
        })
    },[search])
    const values={
        data,
        setData,
        loading,
        setLoading,
        search,
        setSearch
    }
    return <ipContext.Provider value={values}>{children}</ipContext.Provider>
}


// https://geo.ipify.org/api/v2/country?apiKey=at_bYA5ileDmLjafDmfI9GsbRkFQGCNm&ipAddress=188.253.230.242