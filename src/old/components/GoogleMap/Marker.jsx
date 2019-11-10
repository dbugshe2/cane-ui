import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
  const { name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundImage: 'url(/images/blind.svg)' , cursor: 'pointer' }}
      title={name}
    />
  );
};

export default Marker;
