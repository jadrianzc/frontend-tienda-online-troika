import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Markers from './Markers';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
	return (
		<Map center={{ lat: '-0.959610', lng: '-80.713565' }} zoom={17}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			<Markers />
		</Map>
	);
};

export default MapView;
