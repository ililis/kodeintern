import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './comps/Navbar/Navbar';
import AppRouter from './comps/UI/AppRouter';
import { SortUsersContext } from './context';
import { useState } from 'react';

const deps = [
  {dir: "all", name: "Все"},
  {dir: "android", name: "Android"},
  {dir: "ios", name: "iOS"},
  {dir: "design", name: "Дизайн"},
  {dir: "management", name: "Менеджмент"},
  {dir: "qa", name: "QA"},
  {dir: "back_office", name: "Бэк-офис"},
  {dir: "frontend", name: "Frontend"},
  {dir: "hr", name: "HR"},
  {dir: "pr", name: "PR"},
  {dir: "backend", name: "Backend"},
  {dir: "support", name: "Техподдержка"},
  {dir: "analytics", name: "Аналитика"}
];

// const objExample = {
//   avatarUrl: "https://api.lorem.space/image/face?w=120&h=120",
//   birthday: "2003-01-01",
//   department: "pr",
//   firstName: "Joseph",
//   id:"497f6eca-6276-4993-bfeb-53cbbbba35gs76f08",
//   lastName: "Martinez",
//   phone: "+79001234519",
//   position: "writer",
//   userTag: "jm",
// }

function App() {
  // byname
  const [sortType, setSortType] = useState("byname");

  return (
    <SortUsersContext.Provider value={{
      sortType,
      setSortType
    }}>
      <BrowserRouter>
        <Navbar deps={deps} />
        <AppRouter deps={deps}/>
      </BrowserRouter>
    </SortUsersContext.Provider>
  );
}

export default App;
