import React from "react";
import "./edit.css";
import logo from "../../assets/MapiaryIcon.png";
import img1 from "../../assets/write1.png";
import img3 from "../../assets/write2.png";
import img4 from "../../assets/write3.png";
import img6 from "../../assets/write4.png";
import search from "../../assets/icon1.png";
import put from "../../assets/icon2.png";

const Write = () => {
  return (
    <div class="editpage">
      <img class="question" src={img1}></img>
      <div class="input">
        <input placeholder="검색"></input>
        <img class="icon" src={search}></img>
      </div>

      <img class="question" src={img3}></img>
      <textarea>내용을 입력하세요</textarea>
      <img class="question" src={img4}></img>
      <div class="input">
        <input placeholder="첨부"></input>
        <img class="icon" src={put}></img>
      </div>
      <img class="btn" src={img6}></img>
    </div>
  );
};

export default Write;
