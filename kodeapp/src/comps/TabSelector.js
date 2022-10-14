import './TabSelector.css';
import { NavLink, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const SelectLine = styled.hr`
  width: 100%;
  margin: 0;
  padding: 0;
  border: none;
  height: 2px;
  background: #6534FF;
  transform:scaleY(0);
  transform-origin: bottom;
  transition: transform 0.11s linear;  
`;

const TabSelector = (props) => {
  // let navigate = useNavigate();
  // const navReload = () => {
  //   navigate(0);
  // }
  return (
    <NavLink to={"/"+props.dir} 
      className={({isActive}) => 
      isActive ? 'tab_selector active_tab': 'tab_selector'}>
        <p>{props.name}</p>
        <SelectLine/>
    </NavLink>
  );
}

export default TabSelector;