import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const createMapOptions = (maps) => ({
  disableDefaultUI: true,
});

const Map = ({ coordinates }) => {
  const { lat, lon } = coordinates;

  return (
    <div className="Map">
      <GoogleMapReact
        className="Map"
        options={createMapOptions}
        defaultZoom={15}
        center={{ lat: lat, lng: lon }}
      >
        <Marker lat={lat} lng={lon} />
      </GoogleMapReact>
    </div>
  )
}

export default Map;
