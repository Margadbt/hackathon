"use client";

import { useEffect, useState } from "react";
import { fetching } from "../../app/script/FreeAngi";
import HorLine from "../../assets/Line.svg";
import SearchIcon from "../../assets/Search-button.svg";
import Image from "next/image";

const SearchBar = () => {
  return (
    <nav>
      <div className="search-bar">
        <li className="bair">
          <button>
            <span>Хичээлийн байр</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                onChange={(e) => setLocation(e.target.value)}
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
        <li className="odor">
          <button>
            <span>Өдөр</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                onChange={(e) => setDate(e.target.value)}
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
        <li className="tsag">
          <button>
            <span>Цаг</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                onChange={(e) => setTime(e.target.value)}
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
        <li className="search-button-background" id="search">
          <button onClick={SearchBarFunction} className="search-button">
            <Image src={SearchIcon} alt="Search" />
          </button>
        </li>
      </div>
    </nav>
  );
};

export default SearchBar;
