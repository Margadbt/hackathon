import Image from "next/image";
import { useState, useEffect } from "react";
import HorLine from "../../assets/Line.svg";
import SearchIcon from "../../assets/Search-button.svg";
import "../../app/app.style.css";
import "../../styles/index.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [data, setData] = useState([]);
  const [fetchedData, setFetchData]= useState([]);

  const fetchAPI = async () => {
    try {
      const response = await fetch(
          `https://sisi.num.edu.mn/digital_num/api/package/uruunii-medeelel?limits=20`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const fetchedData = await response.json();
      console.log("API response:", fetchedData);
      setFetchData(fetchedData)
      return fetchedData;
    } catch (error) {
      console.error("Failed to fetch data: ", error);
    }
  };

  function SearchBarFunc() {
    console.log("Searching with location:", location, "date:", date, "time:", time);
    console.log("filtered", fetchedData);

    const searchTime = time.split(':')[0];

    const filteredData = fetchedData.filter(item => {
      const locationMatch = item.location === location || location === '';

      const dateMatch = item.date === date || date === '';

      const timeMatch = item.time.includes(searchTime) || time === '';

      return locationMatch && dateMatch && timeMatch;
    });

    console.log("Filtered Data:", filteredData);
  }

  return (
      <nav>
        <div className="search-bar">
          <li className="bair">
            <button>
              <span>Хичээлийн байр</span>
              <span className="light-grey">
              <select
                  className="light-grey selector"
                  onChange={(e) => setLocation(e.target.value)}
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
            <button onClick={SearchBarFunc} className="search-button">
              <Image src={SearchIcon} alt="Search"/>
            </button>
          </li>
        </div>
      </nav>
  );
};

export default SearchBar;
