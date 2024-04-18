import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { IonGrid, IonRow, IonCol, IonTitle } from "@ionic/react";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 17,
      });
    });
  }, []);
  return (
    <div className="w-100 h-screen">
      {viewport.latitude && viewport.longitude && (
        <IonGrid>
          <IonRow>
            <IonCol size="12">
              <IonTitle className="text-center">
                <h1>Your Location:</h1>
              </IonTitle>
            </IonCol>
            <IonCol size="12" className="h-screen">
              <Map
                mapboxAccessToken={MAPBOX_TOKEN}
                initialViewState={viewport}
                mapStyle="mapbox://styles/mapbox/streets-v11"
              >
                <Marker
                  longitude={viewport.longitude}
                  latitude={viewport.latitude}
                />
              </Map>
            </IonCol>
          </IonRow>
        </IonGrid>
      )}
    </div>
  );
}
export default MyMap;

// const MAPBOX_TOKEN =
//   "pk.eyJ1Ijoic2FoaWx0aGFrYXJlNTIxIiwiYSI6ImNrbjVvMTkzNDA2MXQydnM2OHJ6aHJvbXEifQ.z5aEqRBTtDMWoxVzf3aGsg";
