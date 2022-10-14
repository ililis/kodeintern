import './Navbar.css';
import styled from "styled-components"
import TabSelector from './TabSelector';

const TopDivider = styled.div`
    height: 8px;
    width: 100%;
`;

const Navbar = (props) => {
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
          {props.deps.map(dep => (
              <TabSelector key={dep.dir} name={dep.name} dir={dep.dir}/>   
          ))}
        </div>
        
      </div>
      <hr className='navbar_divider'/>
    </div>
  );
};

export default Navbar;
