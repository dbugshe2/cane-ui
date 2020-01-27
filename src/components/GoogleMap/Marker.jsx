import React from 'react';
import './Marker.css';
import Blind from '../../assets/blind.svg'

const Marker = (props: any) => {
  const { name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundImage: Blind , cursor: 'pointer' }}
      title={name}
    />
  );
};

export default Marker;
