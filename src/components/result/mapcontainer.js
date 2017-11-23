import React from 'react';

import Map from './map.js';

export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			markers: [],
			townMarker: {},
			scrollwheel: false,
			showInfo: false,
			zoom: 15,
		};
	}
	handleMarkerClick = (targetMarker) => {
		if (this.state.townMarker === targetMarker) {
			this.setState({
				showInfo: true,
			})
		}
		else {
			this.setState({
				markers: this.state.markers.map(marker => {
					if (marker === targetMarker) {
						return {
							...marker,
							showInfo: true,
						};
					} else {
						return {
							...marker,
							showInfo: false,
						};
					}
				}),
			});
		}
	}

	handleMarkerClose = (targetMarker) => {
		if (this.state.townMarker === targetMarker) {
			this.setState({
				showInfo: false
			})
		}
	}

	handleMapClick = (e) => {

		if (this.state.scrollwheel === false) {
			this.setState({
				scrollwheel: true
			});
		}
		else {
			this.setState({
				scrollwheel: false
			});
		}

	}

	getMarkers () {

	}

	getTownMarker (townpos) {
		return {
			position: {
				lat: parseFloat(townpos.latitude),
				lng: parseFloat(townpos.longitude)
			},
			stop: townpos.stop,
			icon: {
				path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 7,
				fillColor: 'green',
				strokeColor: 'green',
				fillOpacity: 1,
				strokeOpacity: 1,
				rotation: townpos.heading,
			},
		}
	}

	getMarker (item, key) {
		return {
			position: {
				lat: item.latitude,
				lng: item.longitude,
			},
			label: item.label,
			stopname: item.stops ? item.stops[0].name : item.name,
			event_name: item.name,
			key
		};
	}

	initMap (props) {
		let towntemp = this.getTownMarker(props.townpos)
		let markers = [];

		props.stops.towardsKnokke.map((stop, index) => {
			markers.push(this.getMarker(stop, index));
		});

		props.stops.towardsDePanne.map((stop, index) => {
			markers.push(this.getMarker(stop, index));
		});

		this.setState({
			townMarker: towntemp,
			zoom: props.townpos.length === 0 ? 10 : 13,
			center: props.townpos.length === 0 ? { lat: 51.081085999999999, lng: 2.598811 } : { lat: props.townpos.latitude, lng: props.townpos.longitude },
			markers
		});
	}

	componentWillMount() {
		this.initMap(this.props)
	}

	componentWillReceiveProps(nextProps) {
		this.initMap(nextProps)
	}

	render() {

		return (
			<div style={{ height: '50vh' }}>
				<Map
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					zoom={this.state.zoom}
					center={this.state.center}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					onMarkerClick={this.handleMarkerClick}
					onMarkerClose={this.handleMarkerClose}
					showInfo={this.state.showInfo}
					markers={this.state.markers}
					townMarker={this.state.townMarker}
					options={this.state.scrollwheel}

				/>
			</div>
		);
	}
}
