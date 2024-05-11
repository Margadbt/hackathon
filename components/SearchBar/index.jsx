"use client";
import "@/app/script/FreeAngi.js";
import HorLine from "@/assets/Line.svg";
import SearchIcon from "@/assets/Search-button.svg";
import "@/styles/styles.css";
import Image from "next/image";
import { useState } from "react";

const SearchBar = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [bair, setBair] = useState("");

  return (
    <nav>
      <div class="search-bar">
        <li className="bair">
          <button>
            <span>Хичээлийн байр</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                name=""
                id=""
                onChange={(e) => setBair(e.target.value)}
              >
                <option>1-р байр</option>
                <option>2-р байр</option>
                <option>3-р байр</option>
                <option>4-р байр</option>
                <option>7-р байр</option>
                <option>8-р байр</option>
                <option>E-lib</option>
                <option>Хууль зүй</option>
              </select>
            </span>
          </button>
        </li>
        <Image src={HorLine} alt="line" />
        <li class="odor">
          <button>
            <span>Өдөр</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                name=""
                id=""
                onChange={(e) => setBair(e.target.value)}
              >
                <option>Даваа</option>
                <option>Мягмар</option>
                <option>Лхагва</option>
                <option>Пүрэв</option>
                <option>Баасан</option>
                <option>Бямба</option>
                <option>Ням</option>
              </select>
            </span>
          </button>
        </li>
        <Image src={HorLine} alt="line" />
        <li class="tsag">
          <button>
            <span>Цаг</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                name=""
                id=""
                onChange={(e) => setBair(e.target.value)}
              >
                <option>07:40</option>
                <option>08:25</option>
                <option>09:20</option>
                <option>10:05</option>
                <option>11:00</option>
                <option>11:45</option>
                <option>12:40</option>
                <option>13:25</option>
                <option>14:20</option>
                <option>15:05</option>
                <option>16:00</option>
                <option>16:45</option>
                <option>17:40</option>
                <option>18:25</option>
                <option>19:20</option>
                <option>20:05</option>
                <option>21:00</option>
              </select>
            </span>
          </button>
        </li>
        <li class="search-button-background" id="search">
          <button class="search-button">
            <Image src={SearchIcon} alt="Search" />
          </button>
        </li>
      </div>
    </nav>
  );
};

export default SearchBar;
