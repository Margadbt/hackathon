import React from 'react'
import BairList from './BairList'

const index = () => {
  return (
    <header className="main-header">
    <img
        src="styles/assets/class.jpg"
        alt="classroom-picture"
        className="hero-image"
    />
    <nav>
        <a href="index.html" className="header-logo">
            <img className="logo" src="styles/assets/Logo.svg" />
        </a>
        <ul className="search-bar">
            <BairList className="bair"></BairList>
            <img src="styles/assets/Line.svg" alt="none" className="line-svg" />
            <li className="odor">
                <button id="calendar-button">
                    <span>Өдөр</span>
                    <time id="odor-info" className="light-grey">03.05-03.19</time>
                </button>
                <div className="calendar-box" id="calendar-list">
                    <ul className="button-list">
                        <li><button>1 өдөр</button></li>
                        <li><button>7 хоног</button></li>
                        <li><button>2-7 хоног</button></li>
                    </ul>
                    <calendar-cm className="calendar-wrapper"></calendar-cm>
                </div>
            </li>
            <img src="styles/assets/Line.svg" alt="none" className="line-svg" />
            <li className="tsag">
                <button id="tsag-button">
                    <span>Цаг</span>
                    <time id="tsag-info" className="light-grey">16:00 - 19:20</time>
                </button>
                <ul className="tsag-list" id="tsag-list">
                    <li><button>07:40</button></li>
                    <li><button>08:25</button></li>
                    <li><button>09:20</button></li>
                    <li><button>10:05</button></li>
                    <li><button>11:00</button></li>
                    <li><button>11:45</button></li>
                    <li><button>12:40</button></li>
                    <li><button>13:25</button></li>
                    <li><button>14:20</button></li>
                    <li><button>15:05</button></li>
                    <li><button>16:00</button></li>
                    <li><button>16:45</button></li>
                    <li><button>17:40</button></li>
                    <li><button>18:25</button></li>
                    <li><button>19:20</button></li>
                    <li><button>20:05</button></li>
                    <li><button>21:00</button></li>
                    <li><button>21:45</button></li>
                </ul>
            </li>
            <li className="search-button-background" id="search">
                <button className="search-button">
                    <img src="styles/assets/Search-button.svg" alt="search" />
                </button>
            </li>
        </ul>
        <button className="pop-up-btn" id="profile-btn">
            <i className="fa-regular fa-user"></i>
        </button>
        <pop-up-user className="pop-up" id="user-popup"> </pop-up-user>
    </nav>
</header>

  )
}

export default index