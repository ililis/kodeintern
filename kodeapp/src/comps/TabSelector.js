import './TabSelector.css';
import { NavLink } from "react-router-dom";

const TabSelector = (props) => {
  return (
    <NavLink to={"/"+props.dir} 
      className={({isActive}) => 
      isActive ? 'tab_selector active_tab': 'tab_selector'}>
        <p>{props.name}</p>
        <hr/>

    </NavLink>
  );
}

export default TabSelector;