import React from 'react'
import { useContext } from 'react'
import { ipContext } from "../context/ipContext"
function İpİnfo() {
  const { data } = useContext(ipContext)
  // console.log(data)
  return (
    <>
      {
        data && (
          <div className='ip-info'>
          <ul className='ip-info-list'>
            <li className='ip-info-item'>
              <span className='heading'>IP ADDRESS</span>
              <p>{data.ip}</p>
            </li>
            <li className='ip-info-item'>
              <span className='heading' >LOCATION</span>
              <p>{data.region}</p>
            </li>
            <li className='ip-info-item'>
              <span className='heading'>TIMEZONE</span>
              <p>UTC <span>{data.utc_offset}</span></p>
            </li>
            <li className='ip-info-item'>
              <span className='heading'>ISP</span>
              <p>{data.org}</p>
            </li>
          </ul>
        </div>
        )
      }
    </>
  )
}

export default İpİnfo
