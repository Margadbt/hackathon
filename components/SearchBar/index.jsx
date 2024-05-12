"use client";
import "../../app/script/FreeAngi.js";
import HorLine from "../../assets/Line.svg";
import SearchIcon from "../../assets/Search-button.svg";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/index.css";
const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [generalData, setGeneralData] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // Fetch data from the API when location, date, or time changes
    const fetchData = async () => {
      try {
        const data = await fetching();

        // Handle the fetched data here
        console.log("Fetched data:", data);

        // Fetch additional data from another API endpoint
        const response = await fetch(
          `https://sisi.num.edu.mn/digital_num/api/package/uruunii-medeelel?limits=20&location=${location}&date=${date}&time=${time}`
        );
        const data2 = await response.json();
        console.log("API response:", data2);
        const mergedData = [];

        data.forEach((item1) => {
          const matchingItem = data2.find(
            (item2) =>
              item2.uruunii_khuviin_dugaar === item1.uruunii_khuviin_dugaar
          );
          if (matchingItem) {
            const mergedItem = { ...item1, ...matchingItem };
            mergedData.push(mergedItem);
          }
        });

        console.log("Merged Data:", mergedData);
        setGeneralData(mergedData);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location, date, time]);

  const SearchBarFunction = () => {
    // const [FilterData, setFilteredData] = useState([]);

    const FixedTime = time.toString().substring(0, 2);
    console.log(
      "Searching with location:",
      location,
      "date:",
      date,
      "time:",
      FixedTime
    );

    const filteredData = generalData.filter((item) => {
      // Check if the location matches
      const locationMatch =
        location === "" || item.khicheeliin_bair === location;

      // Check if the date matches
      const dateMatch =
        date === "" ||
        item.garagGroup.some((garagItem) => garagItem.garag === date);
      // Check if the time matches'

      const timeMatch =
        !time || // Check if time is falsy (empty string or undefined)
        item.garagGroup.some((garagItem) => {
          if (Array.isArray(garagItem.classHoursSet)) {
            return garagItem.classHoursSet.some((classHour) => {
              const classHour1 = classHour.toString().substring(0, 2);
              return classHour1.includes(FixedTime);
            });
          } else {
            console.error(
              "classHoursSet is not an array:",
              garagItem.classHoursSet
            );
            return false;
          }
        });

      console.log(timeMatch);

      // Return true if all conditions match
      return locationMatch && dateMatch && timeMatch;
    });
    setFilteredData(filteredData);
    console.log("Filtered Data:", filteredData);
  };

  return (
    <nav>
      <div className="search-bar">
        <li className="bair">
          <button id="bair-button">
            <span>Хичээлийн байр</span>
            <span className="light-grey" id="bair-info">
              <select
                className="light-grey selector"
                name=""
                id=""
                onChange={(e) => setBair(e.target.value)}
              >
                <option value="">Select a location</option>
                <option value="1-р байр">1-р байр</option>
                <option value="2-р байр">2-р байр</option>
                <option value="3-р байр">3-р байр</option>
                <option value="4-р байр">4-р байр</option>
                <option value="7-р байр">7-р байр</option>
                <option value="8-р байр">8-р байр</option>
                <option value="E-lib">E-lib</option>
                <option value="Хууль зүй">Хууль зүй</option>
              </select>
            </span>
            </button>
          </li>
          <Image src={HorLine} alt="line" />
          <li className="odor">
            <button>
              <span>Өдөр</span>
              <span className="light-grey">
              <select
                  className="light-grey selector"
                  onChange={(e) => setDate(e.target.value)}
              >
                <option value="">Select a day</option>
                <option value="Даваа">Даваа</option>
                <option value="Мягмар">Мягмар</option>
                <option value="Лхагва">Лхагва</option>
                <option value="Пүрэв">Пүрэв</option>
                <option value="Баасан">Баасан</option>
                <option value="Бямба">Бямба</option>
                <option value="Ням">Ням</option>
              </select>
            </span>
            </button>
          </li>
          <Image src={HorLine} alt="line" />
          <li className="tsag">
            <button>
              <span>Цаг</span>
              <span className="light-grey">
              <select
                  className="light-grey selector"
                  onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select a time</option>
                <option value="07:40">07:40</option>
                <option value="08:25">08:25</option>
                <option value="09:20">09:20</option>
                <option value="10:05">10:05</option>
                <option value="11:00">11:00</option>
                <option value="11:45">11:45</option>
                <option value="12:40">12:40</option>
                <option value="13:25">13:25</option>
                <option value="14:20">14:20</option>
                <option value="15:05">15:05</option>
                <option value="16:00">16:00</option>
                <option value="16:45">16:45</option>
                <option value="17:40">17:40</option>
                <option value="18:25">18:25</option>
                <option value="19:20">19:20</option>
                <option value="20:05">20:05</option>
                <option value="21:00">21:00</option>
              </select>
            </span>
            </button>
          </li>

          <li className="search-button-background" id="search">
            <button onClick={SearchBarFunction} className="search-button">
              <Image src={SearchIcon} alt="Search"/>
            </button>
          </li>
        </div>
      </nav>
  );
};

export default SearchBar;
