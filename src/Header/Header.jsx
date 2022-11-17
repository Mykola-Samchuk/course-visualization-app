import React from "react";
import logo from "./img/logo.png";
import github from "./img/github.png"
import linkedin from "./img/linkedin.svg"
import telegram from "./img/telegram.svg"
import twitter from "./img/twitter.svg"
import youtube from "./img/youtube.svg"
import "./header.css";

// obj social logo
const socialImg = {
  github: github,
  linkedin: linkedin,
  telegram: telegram,
  twitter: twitter,
  youtube:youtube
  
};

export default function Header({ socialLinks }) {

  return (
    <header className="header-wrapp">
      <div className="logo">
        <img src={logo} alt="logo-img" />
      </div>
      <ul className="header-social">
        {
          socialLinks.map((item, index)=>{
            let img = ''
            // comparison of values and push logo img with link
              for(let key in socialImg){
                if(item[0].toLowerCase() === key){
                  img = socialImg[key]
                }
              }
            return <li key={index}><a href={item[1]}><img src={img} alt="" /></a></li>
          })
        }
        </ul>
    </header>
  );
}
