import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./edit.css";
import logo from "../../assets/MapiaryIcon.png";
import img1 from "../../assets/write1.png";
import img3 from "../../assets/write2.png";
import img4 from "../../assets/write3.png";
import img6 from "../../assets/write4.png";
import search from "../../assets/icon1.png";
import put from "../../assets/icon2.png";

const Write = () => {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();

  const getLocation = () => {
    let location;
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      location = { latitude, longitude };
      setSearchText(`${latitude},${longitude}`);
    });
    return location;
  };

  const postData = () => {
    const [latitude, longitude] = searchText.split(",");
    console.log(latitude, longitude);

    axios
      .post("http://localhost:8000/diaries", {
        latitude,
        longitude,
      })
      .then((response) => {
        history.push("/");
      });
  };

  return (
    <div class="editpage">
      <img class="question" src={img1}></img>
      <div class="input">
        <input
          placeholder="검색"
          onClick={getLocation}
          value={searchText}
        ></input>
        <img class="icon" src={search}></img>
      </div>

      <img class="question" src={img3}></img>
      <textarea>내용을 입력하세요</textarea>
      <img class="question" src={img4}></img>
      <div class="input">
        <input placeholder="첨부"></input>
        <img class="icon" src={put}></img>
      </div>
      <img class="btn" src={img6} onClick={postData}></img>
    </div>
  );
};

export default Write;
