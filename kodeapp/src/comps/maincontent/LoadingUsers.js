import './LoadingUsers.css';
import styled from "styled-components";

const bgcolor = `background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);`
const LoadingProfilePhoto = styled.p`
  ${bgcolor}
  width: ${(props) => (props.size)}px;
  height: ${(props) => (props.size)}px;
  border-radius: 50%;
  margin: 6px 0px;
`;
const LoadingFullNameP = styled.p`
  ${bgcolor}
  margin: 25px 0px 0px 16px;
  height: 16px;
  width: 144px;
  border-radius: 50px;
`;
const LoadingDep = styled.p`
  ${bgcolor}
  height: 12px;
  width: 80px;
  margin: 6px 0px 0px 16px;
  color: #55555C;  
  border-radius: 50px;
`;

const LoadingUsers = (props) => {

  let out = (
  <div className='loading_profile_container'>
    <LoadingProfilePhoto size={72}/>
    <div className='loading_info_container'>
      <LoadingFullNameP/>
      <LoadingDep/>
    </div>
  </div>
  );
  let summaryOut = [];
  // summaryOut.push(out)
  // summaryOut.push(out)
  // I CAN DO BETTER!!!
  return (
    <div>{out}{out}{out}{out}{out}{out}{out}{out}{out}{out}</div>
    
  );
}

export default LoadingUsers;