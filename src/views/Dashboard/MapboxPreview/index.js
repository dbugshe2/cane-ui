import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MapboxGlLayer } from '../../../components/Mapbox';

class MapboxPreview extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  state = {
    center: [51.505, -0.091],
    zoom: 13
  };

  render() {
    return (
      <div>
        <Map center={this.state.center} zoom={this.state.zoom}>
          <MapboxGlLayer
            accessToken={MAPBOX_ACCESS_TOKEN}
            style="mapbox://styles/mapbox/streets-v9"
          />
        </Map>
      </div>
    );
  }
}

MapboxPreview.propTypes = {};

export default MapboxPreview;
