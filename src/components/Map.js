import React from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

const createMapOptions = (maps) => ({
  disableDefaultUI: true,
});

const Map = ({ usersCoordinates }) => {
  const { lat, lon } = usersCoordinates;

  return (
    <div className="Map">
      <GoogleMapReact
        className="Map"
        options={createMapOptions}
        defaultCenter={{ lat: 49.148380, lng: 8.325219 }}
        defaultZoom={14}
        center={{ lat: lat, lng: lon }}
      >
        <Marker lat={lat} lng={lon} />
      </GoogleMapReact>
    </div>
  )
}

export default Map;
