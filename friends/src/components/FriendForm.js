import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const FormForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 250px;
  width: 400px;
  border: 1px solid black;
`;

const FriendForm = props => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChange = e => {
    setFriend({ ...friend, [e.target.id]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", friend)
      .then(res => {
        console.log("Post Response", res);
        props.setFriends(res.data);
      })
      .catch(err => {
        console.log("Post Error", err);
      });
    setFriend({
      name: "",
      age: "",
      email: ""
    });
  };

  return (
    <FormForm>
      <h2>Add a Friend!</h2>
      <label>
        <input
          required
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          onChange={handleChange}
          value={friend.name}
          placeholder="Name"
          autoComplete="off"
        />
      </label>
      <label>
        <input
          required
          id="age"
          type="number"
          name="age"
          autoComplete="off"
          onChange={handleChange}
          value={friend.age}
          placeholder="Age"
          autoComplete="off"
        />
      </label>
      <label>
        <input
          required
          id="email"
          type="text"
          name="email"
          autoComplete="off"
          onChange={handleChange}
          value={friend.email}
          placeholder="Email"
          autoComplete="off"
        />
      </label>
      <button type="submit" onClick={submitForm}>
        Submit Friend
      </button>
    </FormForm>
  );
};

export default FriendForm;