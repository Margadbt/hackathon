import HorLine from "@/assets/Line.svg";
import SearchIcon from "@/assets/Search-button.svg";
import SearchBarBairList from "../SearchBarBairList";
import "@/styles/styles.css";
import Image from "next/image";
import React, { useState } from "react";

const SearchBar = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const togglePopUp = () => {
    setIsPopUpVisible(!isPopUpVisible);
  };

  return (
    <nav>
      <div class="search-bar">
        <li className="bair">
          <button id="bair-button" onClick={togglePopUp}>
            <span>Хичээлийн байр</span>
            <span class="light-grey" id="bair-info">
              2-р байр
            </span>
          </button>
          {isPopUpVisible && <SearchBarBairList></SearchBarBairList>}
        </li>
        <Image src={HorLine} alt="line" />
        <li class="odor">
          <button id="calendar-button">
            <span>Өдөр</span>
            <time id="odor-info" class="light-grey">
              03.05-03.19
            </time>
          </button>
          <div class="calendar-box" id="calendar-list">
            <ul class="button-list">
              <li>
                <button>1 өдөр</button>
              </li>
              <li>
                <button>7 хоног</button>
              </li>
              <li>
                <button>2-7 хоног</button>
              </li>
            </ul>
            <div class="calendar-wrapper">
              <div class="calendar-icons">
                <span id="prev">&#8249;</span>
                <p class="current-date"></p>
                <span id="next">&#8250;</span>
              </div>
              <div class="calendar">
                <ul class="weeks">
                  <li>Sun</li>
                  <li>Mon</li>
                  <li>Tue</li>
                  <li>Wed</li>
                  <li>Thu</li>
                  <li>Fri</li>
                  <li>Sat</li>
                </ul>
                <ul class="days"></ul>
              </div>
            </div>
          </div>
        </li>
        <Image src={HorLine} alt="line" />
        <li class="tsag">
          <button id="tsag-button">
            <span>Цаг</span>
            <time id="tsag-info" class="light-grey">
              16:00 - 19:20
            </time>
          </button>
          <ul class="tsag-list" id="tsag-list">
            <li>
              <button>07:40</button>
            </li>
            <li>
              <button>08:25</button>
            </li>
            <li>
              <button>09:20</button>
            </li>
            <li>
              <button>10:05</button>
            </li>
            <li>
              <button>11:00</button>
            </li>
            <li>
              <button>11:45</button>
            </li>
            <li>
              <button>12:40</button>
            </li>
            <li>
              <button>13:25</button>
            </li>
            <li>
              <button>14:20</button>
            </li>
            <li>
              <button>15:05</button>
            </li>
            <li>
              <button>16:00</button>
            </li>
            <li>
              <button>16:45</button>
            </li>
            <li>
              <button>17:40</button>
            </li>
            <li>
              <button>18:25</button>
            </li>
            <li>
              <button>19:20</button>
            </li>
            <li>
              <button>20:05</button>
            </li>
            <li>
              <button>21:00</button>
            </li>
            <li>
              <button>21:45</button>
            </li>
          </ul>
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
