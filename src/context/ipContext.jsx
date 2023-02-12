import { createContext, useContext, useState, useEffect } from "react";
export const ipContext=createContext(null)
export const IpContext=({children})=>{
    const [data,setData]=useState(null)
    const [loading,setLoading]=useState(false)
    const [search,setSearch]=useState("")
    console.log(search)
    useEffect(()=>{
        setLoading(true)
        try {
            const getData = async ()=>{
                const response =await fetch(`https://ipapi.co/${search}/json/`) 
                const info = await response.json()
                setData(info)
            }
            getData()
        } catch (error){
            console.log(error)
        }
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