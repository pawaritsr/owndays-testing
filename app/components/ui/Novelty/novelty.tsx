'use client'

import React from "react";
import "./novelty.css";
import Card from "../../card";
import Button from "../../button";
import { ChevronRight } from "lucide-react";

const Novelty = () => {
  const calendarImage = "/assets/images/calender.svg";
  const clothImage = "/assets/images/cloth.svg";
  const cusionImage = "/assets/images/cusion.svg";
  const bottleImage = "/assets/images/bottle.svg";
  const noteImage = "/assets/images/note.svg";
  const bagImage = "/assets/images/bag.svg";
  return (
    <div className="novelty-container">
      <p className="novelty-title  font-syncopate">NOVELTY</p>
      <div className="novelty-box">
        <p className="font-syncopate font-bold novelty-box-head novelty-circle-before">
          全門市滿額限定好禮
        </p>
        <div className="novelty-list">
          <Card
            date="2023.12.1"
            week="五"
            image={calendarImage}
            name="年曆海報"
            buttonText="消費不限金額"
          />
          <Card
            date="2024.1.1"
            week="一"
            image={clothImage}
            name="眼鏡盒布組"
            buttonText="滿2,990元"
          />
          <Card
            date="2024.2.1"
            week="四"
            image={cusionImage}
            name="圓抱枕"
            buttonText="滿4,290元"
          />
          <Card
            date="2024.3.1"
            week="五"
            image={bottleImage}
            name="吸管杯"
            buttonText="滿3,490元"
          />
          <Card
            date="2024.4.1"
            week="一"
            image={noteImage}
            name="筆記本"
            buttonText="滿3,490元"
          />
          <Card
            date="2024.5.1"
            week="三"
            image={bagImage}
            name="托特包"
            buttonText="滿3,490元"
          />
        </div>
      </div>
      <div className="novelty-btn-box" style={{ marginTop : "5rem"}}>
        <Button variant="outline" radius="full">
          <p className="novelty-sub-detail">
            {" "}
            <ChevronRight /> 尋找附近OWNDAYS門市
          </p>
        </Button>
      </div>
    </div>
  );
};

export default Novelty;
