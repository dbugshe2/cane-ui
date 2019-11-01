import React, { Component } from 'react'
import L from 'leaflet'

const caneIcon = new L.Icon({
  // eslint-disable-next-line no-undef
  iconUrl: require('../../../../assets/blind.svg'),
  // iconRetinaUrl: require('../assets/pointerIcon.svg'),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [28, 64],
  // shadowUrl: '../assets/marker-shadow.png',
  // shadowSize: [68, 95],
  // shadowAnchor: [20, 92],
})


export default caneIcon