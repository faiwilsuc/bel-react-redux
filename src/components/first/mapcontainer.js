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
			zoom: 10,
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

	componentWillMount() {

		let towntemp = {
			position: {
				lat: parseFloat(this.props.townpos.latitude),
				lng: parseFloat(this.props.townpos.longitude)
			},
			stop: this.props.townpos.stop,
			icon: {
				path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 7,
				fillColor: 'green',
				strokeColor: 'green',
				fillOpacity: 1,
				strokeOpacity: 1,
				rotation: this.props.townpos.heading,
			},
		};

		let markers = [];

		this.props.events.map((event, index) => {

			let temp = {
				position: {
					lat: event.latitude,
					lng: event.longitude,
				},
				stopname: event.stops[0].name,
				event_name: event.name,
				key: index
			};

			return markers.push(temp);

		});

		this.setState({
			townMarker: towntemp,
			zoom: this.props.townpos.length === 0 ? 10 : 13,
			center: this.props.townpos.length === 0 ? { lat: 51.081085999999999, lng: 2.598811 } : { lat: this.props.townpos.latitude, lng: this.props.townpos.longitude },
			markers
		});
	}

	componentWillReceiveProps(nextProps) {

		let towntemp = {
			position: {
				lat: parseFloat(nextProps.townpos.latitude),
				lng: parseFloat(nextProps.townpos.longitude)
			},
			stop: nextProps.townpos.stop,
			icon: {
				path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
				scale: 7,
				fillColor: 'green',
				strokeColor: 'green',
				fillOpacity: 1,
				strokeOpacity: 1,
				rotation: nextProps.townpos.heading,
			},
		};

		// Update zoom, center & selected town
		this.setState({
			townMarker: towntemp,
			zoom: nextProps.townpos.length === 0 ? 10 : 13,
			center: nextProps.townpos.length === 0 ? { lat: 51.081085999999999, lng: 2.598811 } : { lat: nextProps.townpos.latitude, lng: nextProps.townpos.longitude }
		});

		let markers = [];

		nextProps.events.map((event, index) => {

			let temp = {
				position: {
					lat: event.latitude,
					lng: event.longitude,
				},
				stopname: event.stops[0].name,
				event_name: event.name,
				key: index
			};

			return markers.push(temp);

		});
		this.setState({ markers });
	}

	render() {

		return (
			<div style={{ height: '70vh' }}>
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
