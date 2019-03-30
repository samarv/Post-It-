import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

const StyledImg = styled.img`
  border-radius: 3%;
  width: 70px;
  height: 70px;
`;
const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .profile-pic-div {
    display: flex;
  }
  h5 {
    font-size: 2rem;
    font-weight: bold;
  }
  span {
    font-size: 1.5rem;
  }
`;

function User(props) {
  if (!props.auth.uid) return <Redirect to="/login" />;
  return (
    <StyledDiv className="card-panel">
      <h5>
        Username: <span>{props.auth.displayName}</span>
      </h5>
      <div className="profile-pic-div">
        <h5>Profile Picture:</h5>
        <StyledImg
          src={props.auth.photoURL}
          alt="profile pic"
          className="profile-img"
        />
      </div>
    </StyledDiv>
  );
}

export default User;
