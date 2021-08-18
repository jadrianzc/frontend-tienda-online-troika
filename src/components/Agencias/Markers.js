import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';

const Markers = () => {
	return <Marker position={{ lat: '-0.959610', lng: '-80.713565' }} icon={IconLocation} />;
};

export default Markers;
