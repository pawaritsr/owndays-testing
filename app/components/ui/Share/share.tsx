'use client'

import React from "react";
import "./share.css";
import Button from "../../button";
import Image from "next/image";

const Share = () => {
  const facebookImage = "/assets/images/facebook.svg";
  const lineImage = "/assets/images/Line.svg";
  const xImage = "/assets/images/x.svg";

  return (
    <div className="share-main">
      <div className="share-container">
        <p className="share-title  font-syncopate">SHARE</p>
        <div className="share-app">
          <Button size="icon" className="share-app-icon" radius="large">
            <Image src={facebookImage} alt="facebook" width={20} height={38} />
          </Button>

          <Button size="icon" className="share-app-icon" radius="large">
            <Image src={lineImage} alt="line" width={37} height={35} />
          </Button>

          <Button size="icon" className="share-app-icon" radius="large">
            <Image src={xImage} alt="x" width={25} height={25} />
          </Button>
        </div>
      </div>

      <p className="noritake-copyright">&#169;	Noritake</p>
    </div>
  );
};

export default Share;
