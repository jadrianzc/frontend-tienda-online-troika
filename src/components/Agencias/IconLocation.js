import L from 'leaflet';
import Icon from '../../assets/images/iconMark.svg';

export const IconLocation = L.icon({
	iconUrl: Icon,
	iconRetinaUrl: Icon,
	iconAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: [50, 50],
	className: 'leaflet-venue-icon',
});
