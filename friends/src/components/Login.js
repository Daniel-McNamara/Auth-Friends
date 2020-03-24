import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";

const LoginForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
width: 500px;
height 500px;
border: 1px solid black;
`;

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/freinds-list");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.login}>
          <label>
            Username
            <input
              required
              id="username"
              name="username"
              type="text"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <label>
            Password
            <input
              required
              id="password"
              name="password"
              type="text"
              value={this.state.credentials.password}
              onChange={this.handleChange}
              autoComplete="off"
            />
          </label>
          <button type="submit" onClick={this.login}>
            Submit
          </button>
        </LoginForm>
      </div>
    );
  }
}

export default Login;