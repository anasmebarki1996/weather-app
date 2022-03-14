import { Marker, GoogleApiWrapper } from "google-maps-react";
import { StyledMap } from "./map.style";

export const MapContainer = ({
  google,
  showMap,
  position = { lat: 0, lng: 0 },
}) => {
  return (
    <StyledMap
      showMap={showMap}
      google={google}
      zoom={14}
      initialCenter={position}
    >
      <Marker position={position} />
    </StyledMap>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBFYTKRWRI3qXAQ8qdagcg88hMtOgx84cg",
})(MapContainer);
