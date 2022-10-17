import './User.css';
import styled from 'styled-components';
import ProfilePhoto from './ProfilePhoto';

const FullNameP = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #050510;
  margin: 3px 0px;
  height: 20px;
`;
const UserTag = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #97979B;
  margin: 5px 0px 3px 4px;
  height: 18px;
`;
const Dep = styled.p`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin: 0px 0px 11px 0px;
  color: #55555C;
`;

const User = (props) => {
  const fullname = props.user.firstName + ' ' + props.user.lastName;

  return (
    <div className='profile_container'>
      <div className='photo_container'>
        <ProfilePhoto imgsrc={props.user.avatarUrl} size={72}/>
      </div>
      <div className='info_container'>
        <div className='namentag_container'>
          <FullNameP>{fullname}</FullNameP><UserTag>{props.user.userTag}</UserTag>
        </div>
        <Dep>{props.user.department}</Dep>
      </div>
    </div>
  );
}
export default User;