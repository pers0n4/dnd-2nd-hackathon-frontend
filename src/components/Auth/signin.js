import React from "react";
import "./auth.css";
import logo from "../../assets/MapiaryIcon.png";

const SignIn = () => {
  return (
    <div class="background">
      <div class="main">
        <p>MAPIARY 와 함께</p>
        <p>아름다운 추억이 담긴 장소에 </p>
        <p>당신의 하루를 기록해보세요!</p>
      </div>
      <div class="signup-box">
        <img class="logo" src={logo}></img>
        <p>
          <input class="signup-input" placeholder="ID"></input>
        </p>
        <p>
          <input class="signup-input" placeholder="PASSWORD"></input>
        </p>
        <button class="signup-btn">로그인</button>
      </div>
    </div>
  );
};

export default SignIn;
