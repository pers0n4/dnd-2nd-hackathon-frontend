import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_API_KEY}&autoload=false`;
    document.head.appendChild(script);

    let example;
    fetch("http://localhost:8000/diaries", { method: "GET" })
      .then((response) => {
        response.json().then((result) => {
          example = result;

          console.log(example);
        });
      })
      .catch((error) => {
        console.error(error);
      });

    script.onload = () => {
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

        const markerImage = new kakao.maps.MarkerImage(
          markerSrc,
          markerSize,
          {}
        );

        for (const e of example) {
          const markerPosition = new kakao.maps.LatLng(e.latitude, e.longitude);

          const marker = new kakao.maps.Marker({
            position: markerPosition,
            image: markerImage,
          });
          marker.setMap(map);
        }
      });
    };
  }, []);

  return <div id="kakao-map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default Map;
