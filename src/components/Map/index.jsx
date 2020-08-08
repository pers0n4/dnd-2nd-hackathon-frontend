import React, { useEffect } from "react";
import Fab from "../Fab";

const Map = () => {
  useEffect(() => {
    const { kakao } = window;

    kakao.maps.load(() => {
      let container = document.getElementById("kakao-map");
      let options = {
        center: new kakao.maps.LatLng(35.231155, 129.083623),
        level: 3,
      };

      const map = new kakao.maps.Map(container, options);

      const markerSrc =
        "https://developers.kakao.com/console/static/favicon.ico";
      const markerSize = new kakao.maps.Size(64, 64);

      const markerImage = new kakao.maps.MarkerImage(markerSrc, markerSize, {});

      fetch("http://localhost:8000/diaries", { method: "GET" })
        .then((response) => {
          response.json().then((result) => {
            for (const mark of result) {
              const markerPosition = new kakao.maps.LatLng(
                mark.latitude,
                mark.longitude
              );

              const marker = new kakao.maps.Marker({
                position: markerPosition,
                image: markerImage,
              });
              marker.setMap(map);
            }
          });
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, []);

  return (
    <>
      <Fab />
      <div id="kakao-map" style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};

export default Map;
