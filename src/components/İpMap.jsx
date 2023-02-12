import React from 'react'
import { useContext,useEffect } from 'react'
import { ipContext } from "../context/ipContext"
import "leaflet/dist/leaflet.css"
import icon from "./icon"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import MarkerPosition from './MarkerPosition'
function İpMap() {
  const { data } = useContext(ipContext)
  
  // console.log(data.latitude)
  return (
    <>
  {
     data && (
      <div className='ip-map'>
        <MapContainer center={[data.latitude, data.longitude]} zoom={13} scrollWheelZoom={true} style={{ height: "100vh", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerPosition  data={data}/>
        </MapContainer>
      </div>
     )
  }

    </>
  )
}

export default İpMap
