import './RadioContainer.css';

const RadioContainer = (props) => {
  

  return (
    <div className='sort_radio_item'>
      <input type="radio" id={props.item.id} name={props.area} value={props.item.id}
        onClick={props.changeSort} 
        defaultChecked={props.checked}></input>
      <label htmlFor={props.item.id}>{props.item.name}</label>
    </div>
  );
}

export default RadioContainer;