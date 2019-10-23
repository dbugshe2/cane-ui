import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles, Divider } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';
import { Paper } from 'components';
import styles from './styles';
import caneIcon from './customMarker';

import {
  Map as LeafletMap,
  TileLayer,
  Popup,
  GeoJSON,
  Marker
} from 'react-leaflet';
import {} from 'mapbox-gl';
// import MapboxGlLayer from '@mongodb-js/react-mapbox-gl-leaflet';
// import Marker from 'react-leaflet-animated-marker'

export class MapPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 9.613607,
      lng: 6.547432,
      zoom: 16
    };
  }

  static propTypes = {};

  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);
    const position = [this.state.lat, this.state.lng];
    return (
      <Paper {...rest} className={rootClassName}>
        <Typography className={classes.title} variant="body2">
          Map
        </Typography>
        <LeafletMap center={position} zoom={this.state.zoom}>
          {/* <MapboxGlLayer
            accessToken="pk.eyJ1IjoibWFyb29mc2hpdHR1IiwiYSI6ImNrMjFscnMweTBkNjIzZHBnaXAycDB5NmIifQ.Tvzq1einSjKXeFsFWKsrzA"
            attribution="Copyright attribution message goes here"
            style="mapbox://styles/mapbox/streets-v11"
          /> */}
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            style="https://openmaptiles.github.io/osm-bright-gl-style/style-cdn.json"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker icon={caneIcon} position={position}>
            <Popup>Cane is Here</Popup>
          </Marker>
        </LeafletMap>
      </Paper>
    );
  }
}

MapPreview.propTypes = {
  accessToken: PropTypes.string.isRequired,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  style: PropTypes.string
};

export default withStyles(styles)(MapPreview);
