import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation';
import 'leaflet/dist/leaflet.css';

const MapView = () => {
	return (
		<Map center={{ lat: '51.52437', lng: '13.41053' }} zoom={13}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			<Marker position={{ lat: '51.52437', lng: '13.41053' }} icon={IconLocation} />
		</Map>
	);
};

export default MapView;
