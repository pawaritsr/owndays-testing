'use client'

import React from "react";
import "./presentation.css";
import Image from "next/image";
import mainPresentation from "../../../../public/assets/images/presentation-main.png";
import Button from "../../button";
import { Play } from "lucide-react";
import { Link } from "react-scroll";

const Presentation = () => {
  return (
    <div className="presentation-main">
      <div className="presentation-container">
        <Image src={mainPresentation} alt="main" width={400} height={345} />
        <div className="presentation-title">
          <p className="font-main text-3xl font-syncopate">OWNDAYS</p>
          <p className="font-x text-3xl font-syncopate">×</p>
          <p className="font-main text-3xl font-syncopate">NOROTAKE</p>
          <Button>
            <p className="font-btn-main">
              2023
              <Play />
              2024 期間限定
            </p>
          </Button>
        </div>
      </div>
      <div className="container_mouse">
        <span className="mouse-btn">
          <span className="mouse-scroll"></span>
        </span>
        <Link to="story-main" smooth={true} duration={700}>
          <span className="font-syncopate scroll-text">SCROLL</span>
        </Link>
      </div>
    </div>
  );
};

export default Presentation;
