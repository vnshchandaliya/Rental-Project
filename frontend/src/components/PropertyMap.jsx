import React, { useState, useRef, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = { width: "100%", height: "100%" };
const defaultCenter = { lat: 30.3831, lng: -86.4974 };

const PropertyMap = ({ properties, selectedProperty }) => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyCCyiZIUtPfTzx5ssP8kg1-YbNpMIBBl3A" });
  const [selected, setSelected] = useState(null);
  const mapRef = useRef();

  

  const onMapLoad = (map) => {
    mapRef.current = map;
  };

  // When selectedProperty changes, center map on it
  useEffect(() => {
    if (selectedProperty && mapRef.current) {
      mapRef.current.panTo({ 
        lat: selectedProperty.latitude, 
        lng: selectedProperty.longitude 
      });
      mapRef.current.setZoom(14); // zoom in
      setSelected(selectedProperty); // highlight marker
    }
  }, [selectedProperty]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={10}
      center={defaultCenter}
      onLoad={onMapLoad}
    >
      {properties.map((property) => (
        <Marker className="text-red-500"
          key={property._id}
          position={{ lat: property.latitude, lng: property.longitude }}
          onClick={() => setSelected(property)}
          icon={selected?._id === property._id 
            ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
            : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        />
      ))}

      {selected && (
        <InfoWindow
          position={{ lat: selected.latitude, lng: selected.longitude }}
          onCloseClick={() => setSelected(null)}
        >
          <div>
                    <img
      src={selected.image}
      alt={selected.name}
      className="w-full h-24 object-cover rounded-lg mb-2"
    />
            <h3>{selected.title}</h3>
            <p>{selected.location}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default PropertyMap;
