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

// Leaflet map files
import caneIcon from './customMarker';

import {
  Map as LeafletMap,
  Popup,
  Marker
} from 'react-leaflet';
// import MapboxGlLayer from '@mongodb-js/react-mapbox-gl-leaflet';
// import Marker from 'react-leaflet-animated-marker'
import MapBoxGLLayer from '../../../../components/MapBoxGLLayer';

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
          <MapBoxGLLayer
            accessToken="pk.eyJ1IjoibWFyb29mc2hpdHR1IiwiYSI6ImNrMjFscnMweTBkNjIzZHBnaXAycDB5NmIifQ.Tvzq1einSjKXeFsFWKsrzA"
            style="mapbox://styles/mapbox/streets-v10"
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
