'use client'

import React from "react";

import "./about.css";
import { House } from "lucide-react";

const About = () => {
  return (
    <div className="about-container">
      <p className="about-title  font-syncopate">ABOUT</p>
      <div className="about-box">
        <div className="about-noritake">
          <p className="font-medium about-title about-text">
            Noritake <House />
          </p>
          <p>插畫家/設計師/藝術家</p>
          <p>Artist / Illustrator / Designer</p>
        </div>
        <div className="about-detail">
          <p>
            主要以黑白單色調繪畫為主。作品廣泛應用於國內外廣告，書籍以及雜誌，時尚，壁畫等。活動範圍廣泛，包括設計以及指導等各種活動。並積極創作以插畫為主的筆記本等產品。
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
