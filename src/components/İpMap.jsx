import React from 'react'
import { useContext } from 'react'
import {ipContext} from "../context/ipContext"
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer, useMap,Marker,Popup} from 'react-leaflet'
function İpMap() {
  const data=useContext(ipContext)
  const information=data.data
  return (
    <>
      {

        information && (
          <div className='ip-map'>
          <MapContainer center={[information.latitude, information.longitude]} zoom={13} scrollWheelZoom={true} style={{height:"300px",width:"100%"}}> 
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[information.latitude, information?.longitude]}>
      </Marker>
    </MapContainer>
      </div>
        ) || (
           <h1>salam</h1>
        )
      }
    </>
  )
}

export default İpMap
