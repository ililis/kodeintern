import './Navbar.css';
// import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"
import styled from "styled-components"
import TabSelector from './TabSelector';

const TopDivider = styled.div`
    height: 8px;
    width: 100%;
`;


const Navbar = () => {
  const navigate = useNavigate();
  const deps = ["Все", "Designers", "Analysts", "Managers", "iOS", "Android"];
  return (
    <div>
      
      <div className="navbar">
      <TopDivider/>
          <div className="header_container">
            <h1>Поиск</h1>
          </div>
        <div className='search_container'>
          <input type="text" className="search" placeholder="Введи имя, тег, почту..."></input>
        </div>
        <div className='scrollbar_container'>
          {deps.map(dep => (
            <TabSelector key={dep} name={dep}/>
          ))}
        </div>
        
      </div>
      <hr/>
    </div>
  );
};

export default Navbar;
