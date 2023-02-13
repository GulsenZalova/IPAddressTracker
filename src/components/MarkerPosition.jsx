import React from 'react'
import icon from "./icon"
import { useEffect } from 'react'
import { useMap, Marker } from 'react-leaflet'
function MarkerPosition({ data }) {
  const position = [data?.latitude, data?.longitude]
  console.log(position)
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);
  return (
    <div>
      {
        position && (
          <Marker icon={icon} position={position}>
          </Marker>
        ) 
      }
    </div>
  )
}

export default MarkerPosition
