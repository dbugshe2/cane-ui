import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
// import Marker from './Marker';

const mapStyles = {
  width: '100%',
  height: '100%',
  left: '0',
  top: '0'
};

export class GoogleMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 9.613607,
      lng: 6.547432,
      zoom: 10
    };

  }
  render() {
    const {lat, lng, zoom, time} = this.state
    const { google } = this.props;
    return (
      <div style={{ position: 'relative', overflow: 'hidden', height: '60vh' }}>
        <Map
          google={google}
          initialCenter={{
            lat: lat,
            lng: lng
          }}
          style={mapStyles}
          zoom={zoom}
        >
          <Marker
            icon={{
              url: '/images/blind.svg',
              scaledSize: new google.maps.Size(24, 32)
            }}
            lat={lat}
            lng={lng}
            name="Current Location"
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  // eslint-disable-next-line no-undef
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(GoogleMap);
