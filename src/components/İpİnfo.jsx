import React from 'react'
import { useContext } from 'react'
import {ipContext} from "../context/ipContext"
function İpİnfo() {
  const data=useContext(ipContext)
  const information=data.data
  return (
    <>
       {
         information && (
          <div className='ip-info'>
          <ul className='ip-info-list'>
            <li className='ip-info-item'>
                <span className='heading'>IP ADDRESS</span>
                <p>{information.ip}</p>
            </li>
            <li className='ip-info-item'>
                <span className='heading' >LOCATION</span>
                <p>{information.region}</p>
            </li>
            <li className='ip-info-item'>
                <span className='heading'>TIMEZONE</span>
                <p>UTC <span>{information.utc_offset}</span></p>
            </li>
            <li className='ip-info-item'>
                <span className='heading'>ISP</span>
                <p>{information.org}</p>
            </li>
          </ul>
        </div>
         )
       }
    </>
  )
}

export default İpİnfo
