import React from "react";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  jusify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;

const HeadNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5vh;
`;

function App() {
  return (
    <AppDiv className="App">
      <HeadNav>
        <Link to="/login">Login</Link>
        <Link to="/friends-list">Friends List</Link>
      </HeadNav>
      <Switch>
        <PrivateRoute exact path="/friends-list" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </AppDiv>
  );
}

export default App;
