import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setSearchText(`${latitude}, ${longitude}`);
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
      <Link to="/">
        <img class="btn" src={img6}></img>
      </Link>
    </div>
  );
};

export default Write;
