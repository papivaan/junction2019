import React from "react";

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
    Marker,
} from "react-google-maps";
import config from "./config";

const SingleMarkerMap = (props) => {
	const MapWrapper = withScriptjs(
		withGoogleMap(props => (
			<GoogleMap
				defaultZoom={15}
				defaultCenter={props.location}
				defaultOptions={{
					scrollwheel: false,
					styles: [
						{
							featureType: "administrative",
							elementType: "labels.text.fill",
							stylers: [{ color: "#444444" }]
						},
						{
							featureType: "landscape",
							elementType: "all",
							stylers: [{ color: "#f2f2f2" }]
						},
						{
							featureType: "poi",
							elementType: "all",
							stylers: [{ visibility: "off" }]
						},
						{
							featureType: "road",
							elementType: "all",
							stylers: [{ saturation: -100 }, { lightness: 45 }]
						},
						{
							featureType: "road.highway",
							elementType: "all",
							stylers: [{ visibility: "simplified" }]
						},
						{
							featureType: "road.arterial",
							elementType: "labels.icon",
							stylers: [{ visibility: "off" }]
						},
						{
							featureType: "transit",
							elementType: "all",
							stylers: [{ visibility: "off" }]
						},
						{
							featureType: "water",
							elementType: "all",
							stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
						}
					]
				}}
			>
                <Marker position={props.location}></Marker>
			</GoogleMap>
		))
	);
	return (
		<MapWrapper
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}`}
			loadingElement={<div style={{ height: `100%` }} />}
			location={props.location}
			containerElement={
				<div
					style={{ height: `600px` }}
					className="map-canvas"
					id="map-canvas"
				/>
			}
			mapElement={
				<div style={{ height: `100%`, borderRadius: "inherit" }} />
			}
		/>
	)
}

export default SingleMarkerMap;