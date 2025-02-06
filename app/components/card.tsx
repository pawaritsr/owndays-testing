'use client'

import { Play } from "lucide-react";
import React from "react";
import Image from "next/image";
import Button from "./button";
import { Tilt } from "react-tilt";

interface CardProps {
  date: string;
  week: string;
  image: string;
  name: string;
  buttonText: string;
}

const Card: React.FC<CardProps> = ({ date, week, image, name, buttonText }) => {
  return (
    <div className="novelty-card">
      <p className="novelty-date font-syncopate font-bold">
        {date} <span className="novelty-week text-sm">{week}</span> <Play />
      </p>
      <div className="novelty-image-bg">
        <Tilt>
          <Image
            src={image}
            alt="calendar"
            layout="intrinsic"
            width={0}
            height={0}
          />
        </Tilt>
      </div>
      <p className="novelty-detail font-syncopate font-bold">
        <span className="novelty-to">送</span> {name}
      </p>
      <div className="novelty-btn-box">
        <Button className="novelty-btn">
          <p className="novelty-btn-text font-syncopate font-bold">
            {buttonText}
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Card;
