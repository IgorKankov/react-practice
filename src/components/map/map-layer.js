import React, {useState, useEffect} from 'react'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const MapLayer = props => {
  const [position, setPosition] = useState([0, 0]);
  const [position1, setPosition1] = useState([0, 0]);


    return (
      <MapContainer center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position1}>
          <Popup>
            <span>Trip completed here</span>
          </Popup>
        </Marker>
        <Marker position={position}>
          <Popup>
            <span>Trip started here</span>
          </Popup>
        </Marker>
      </MapContainer>
    )
};

export default MapLayer;