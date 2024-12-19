import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = ({ onTabClick, activeTap }) => {
  const [activeTab, setActiveTab] = useState('WOMEN');  // 초기값 설정

  useEffect(() => {
    setActiveTab('WOMEN');  // 초기화 시 'WOMEN'을 기본 값으로 설정
  }, []);

  const isActiveColor = { color: "#2b2b2b" };

  return (
    <div className='headerWrap'>
      <div className='header'>
        <ul className='logo'>
          <li><h2><Link to="/">8Seconds</Link></h2></li>
        </ul>
        <ul className='uniPick'>
          <li>
            <button
              onClick={() => {
                setActiveTab("WOMEN");
                onTabClick("WOMEN");
              }}
              style={activeTab === "WOMEN" ? isActiveColor : null}
            >
              WOMEN
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveTab("MEN");
                onTabClick("MEN");
              }}
              style={activeTab === "MEN" ? isActiveColor : null}
            >
              MEN
            </button>
          </li>
        </ul>
        <ul className='myOption'>
          <li>LOGIN</li>
          <li><FaSearch /></li>
          <li><IoBag /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
