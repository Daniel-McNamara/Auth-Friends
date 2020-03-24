import React from "react";
import styled from "styled-components";

const FriendDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1%;
  border: 1px solid black;
  height: 150px;
  width: 250px;
`;

const Friend = props => {
  return (
    <FriendDiv>
      <h2>{props.friend.name}</h2>
      <p>Age: {props.friend.age}</p>
    </FriendDiv>
  );
};

export default Friend;