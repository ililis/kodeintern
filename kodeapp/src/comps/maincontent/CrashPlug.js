// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './CrashPlug.css';

const FirstChashText = styled.p`
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: #050510;
`;
const SecondChashText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #97979B;
`;
const TryAgain = styled.a`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #6534FF;
`;

const CrashPlug = (props) => {
  // let navigate = useNavigate();
  // const pageReload = () => {
  //   navigate('/ios');
  // }
  const pageReload = () => {
    props.update(true);
  }
  
  return (
    <div className='crash_general_container'>
      <img src='flying-saucer_1f6f8.svg' width='56px' height='56px'></img>
      <div className='crash_text_container'>
        <FirstChashText>Какой-то сверхразум все сломал</FirstChashText>
        <SecondChashText>Постараемся быстро починить</SecondChashText>
        <TryAgain onClick={pageReload}>Попробовать снова</TryAgain>
      </div>
    </div>
  );
}

export default CrashPlug;