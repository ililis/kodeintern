import './User.css';
import styled from 'styled-components';
import ProfilePhoto from './ProfilePhoto';

const FlexDiv = styled.div`
  display: flex;
  width: 100%;
`;
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
const Birth = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  padding: 30px 4px 30px 0;
  margin: 0;
  color: #55555C;
  white-space: nowrap;
`;

const User = (props) => {
  const fullname = props.user.firstName + ' ' + props.user.lastName;
  let options = {month: 'long', day: 'numeric' };
  let formatedDate = new Date(props.user.birthday);
  formatedDate = formatedDate.toLocaleDateString("ru-RU", options);

  return (
    <FlexDiv>
      <div className='profile_container'>
        <div className='photo_container'>
          <ProfilePhoto imgsrc={props.user.avatarUrl} size={72}/>
        </div>
        <div className='info_container'>
          <div className='namentag_container'>
            <FullNameP>{fullname}</FullNameP><UserTag>{props.user.userTag}</UserTag>
          </div>
          <Dep>{props.user.position}</Dep>
        </div>
      </div>
      { props.showBirth && <Birth>{formatedDate}</Birth> }
    </FlexDiv>
  );
}
export default User;