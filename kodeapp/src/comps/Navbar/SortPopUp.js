import RadioContainer from '../UI/RadioContainer';
import './SortPopUp.css';

const SortPopUp = (props) => {

  // let sortItems = ["По алфавиту", "По дню рождения"];
  
  return (
    <div>
      <div className='sort_popup_gray_bg' onClick={props.closePopUp}></div>
      <div className='sort_popup'>
        <div className='sort_popup_header'>
          <p>Сортировка</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={props.closePopUp}>
            <rect width="24" height="24" rx="12" fill="#F7F7F8"/>
            <path d="M16.7364 7.2636C17.0879 7.61508 17.0879 8.18492 16.7364 8.5364L13.273 12L16.7364 15.4636C17.0586 15.7858 17.0854 16.2915 16.817 16.6442L16.7364 16.7364C16.3849 17.0879 15.8151 17.0879 15.4636 16.7364L12 13.273L8.5364 16.7364C8.18492 17.0879 7.61508 17.0879 7.2636 16.7364C6.91213 16.3849 6.91213 15.8151 7.2636 15.4636L10.727 12L7.2636 8.5364C6.94142 8.21421 6.91457 7.70853 7.18306 7.35577L7.2636 7.2636C7.61508 6.91213 8.18492 6.91213 8.5364 7.2636L12 10.727L15.4636 7.2636C15.8151 6.91213 16.3849 6.91213 16.7364 7.2636Z"/>
          </svg>
        </div>
        <div className='sort_radio_container'>
          {/* <RadioContainer items={sortItems} region={"sort"}/> */}
          <div className='sort_radio_item'>
            <input type="radio" id="byabc"
            name="sort" value="byabc"></input>
            <label for="byabc">По алфавиту</label>
          </div>
          <div className='sort_radio_item'>
            <input type="radio" id="byborn"
            name="sort" value="byborn"></input>
            <label for="byborn">По дню рождения</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortPopUp;