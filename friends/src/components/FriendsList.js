import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Friend from "./Freind";
import FriendForm from "./FriendForm";
import styled from "styled-components";

const FriendsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
`;

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        console.log(res);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <FriendsDiv>
      <FriendForm friends={friends} setFriends={setFriends} />
      <ListDiv>
        {friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </ListDiv>
    </FriendsDiv>
  );
};

export default FriendsList;