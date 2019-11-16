import React from "react";

import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
} from "react-google-maps";

import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer";

import config from "./config";

import MarkerWithInfoWindow from "./MarkerWithInfoWindow";

const Map = ({ data }) => {
	const MapWrapper = withScriptjs(
		withGoogleMap(props => (
			<GoogleMap
				defaultZoom={11}
				defaultCenter={{ lat: 60.2221845, lng: 24.9896104 }}
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
				<MarkerClusterer
					averageCenter
					enableRetinaIcons
					gridSize={60}
				>
					{props.sites.map((site, i) => {
						const key = site.find(s => s.short_text).short_text;
						const location = site.find(s => s.location).location;
						return (
							<MarkerWithInfoWindow key={key} name={key} location={location} site={site} />
						)
					}
					)}
				</MarkerClusterer>
			</GoogleMap>
		))
	);
	return (
		<MapWrapper
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}`}
			loadingElement={<div style={{ height: `100%` }} />}
			sites={data}
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

export default Map;