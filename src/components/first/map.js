import React from 'react';
import { GoogleMap, InfoWindow, Marker, withGoogleMap } from 'react-google-maps';

const Map = withGoogleMap((props) => {

    return (

        <GoogleMap
            ref={props.onMapLoad}
            zoom={props.zoom}
            center={props.center}
            onClick={props.onMapClick}
            options={{ scrollwheel: props.options }}
        >
            {props.markers && props.markers.map((marker, index) => (
                <Marker key={index} position={marker.position}
                    icon={{
                    path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
                    scale: 1.5,
                    fillColor: 'red',
                    strokeColor: 'red',
                    fillOpacity: 0.5,
                    strokeOpacity: 1,
                }} onClick={(e) => props.onMarkerClick(marker)}>
                    {
                        marker.showInfo && (
                            <InfoWindow>
                                <div>{marker.event_name}<br /><br />{marker.stopname}</div>
                            </InfoWindow>
                        )}
                </Marker>
            ))}
            {props.townMarker &&
                <Marker {...props.townMarker} onClick={() => props.onMarkerClick(props.townMarker)}>
                    {props.showInfo && (
                        <InfoWindow onCloseClick={() => props.onMarkerClose(props.townMarker)}>
                            <div>{props.townMarker.stop}</div>
                        </InfoWindow>
                    )}
                </Marker>
            }
            
        </GoogleMap>

    );

});

export default Map;

