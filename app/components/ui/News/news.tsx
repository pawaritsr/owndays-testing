'use client'

import React from "react";
import "./news.css";
import Button from "../../button";
import { ChevronRight } from "lucide-react";

const News = () => {
  return (
    <div className="news-main">
      <div className="news-container">
        <p className="text-base news-detail">
          2023-2024
          OWNDAYS特別邀請到日本人氣插畫藝術家<span className="news-circle-before">『NORITAKE』</span>，為品牌設計出多款極簡文青贈品！
          喜愛NORITAKE的朋友們絕對不可錯過，請密切鎖定OWNDAYS官方消息！
        </p>
        <div>
          <p className="text-sm news-sub-detail font-light">
            ※ 聯名贈品限單筆消費贈送，數量有限送完為止
          </p>
          <p className="text-sm news-sub-detail font-light">
            ※ 台灣、香港地區限定。
          </p>
        </div>
        <Button variant="outline" radius="full" style={{ margin: "0 auto" }}>
          <p className="news-sub-detail"> <ChevronRight /> 前往OWNDAYS官方臉書</p>
        </Button>
      </div>
    </div>
  );
};

export default News;
