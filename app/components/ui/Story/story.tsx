'use client'

import React from "react";
import "./story.css";
import Image from "next/image";
import StoryImage from "../../../../public/assets/images/story.png";
import StoryLine from "../../../../public/assets/images/line-story.png";
import DetailLine from "../../../../public/assets/images/line-detail.png";

const Story = () => {
  return (
    <div id="story-main" className="story-container">
      <div className="story-box">
        <p className="story-title font-syncopate">STORY</p>
      </div>
      <div className="detail-box">
        <div style={{ paddingRight: "2rem" }}>
          <p className="story-detail">
            某天，喜歡<span className="circle-before">戴眼鏡</span>的兩個人，在咖啡廳相遇了。兩個人有很多共同興趣，像是旅行、拍攝底片相機、參觀美術展覽與收集眼鏡等，同時也都擁有10副以上的眼鏡！
            很喜歡日本的文青街道，也常常相約在下北澤、吉祥寺和高圓寺等地方。
            休假時也喜歡窩在咖啡廳裡聊天、交流情報。總是想著有一天也要去台灣跟香港，找尋屬於那個地方的文青日常。
          </p>
        </div>
      </div>
      <div className="story-image-box">
        <Image src={StoryLine} className="line story-line" alt="line" />
        <Image
          src={StoryImage}
          alt="main"
          width={475}
          height={250}
        />
        <Image src={DetailLine} className="line detail-line" alt="line" />
      </div>
    </div>
  );
};

export default Story;
