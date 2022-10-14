import styled from "styled-components";

const Image = styled.img`
    width: ${(props) => (props.size)}px;
    height: ${(props) => (props.size)}px;
    border-radius: 50%;
`;
  
const ProfilePhoto = (props) => {
  const src = `${props.imgsrc}&t=${Date.now()+Math.floor(Math.random() * 500)}`;
  
    return (
      <Image src={src} size={props.size}/>
    );
  }

export default ProfilePhoto;