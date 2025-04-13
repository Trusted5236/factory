import React, { useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const MapComponent = () => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current;
      if (!markerRef.current) {
        markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: { lat: 6.5349655, lng: 3.3892904 },
          title: "My Location",
        });
      }
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCutWltYsrVnnZJBtFIBDhqJARm_xZgxSs">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={{ lat: 6.5349655, lng: 3.3892904 }}
        zoom={15}
        onLoad={(map) => (mapRef.current = map)}
      />
    </LoadScript>
  );
};

export default MapComponent;