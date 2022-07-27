import React from "react";
import { post } from "../services/service";
import { useParams, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("qwerty");
  const [password, setPassword] = React.useState("password");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const create = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        setStatus("Please include username and password");
      } else {
        let response = await post("/users/login", {
          username: username,
          password: password,
        });
        console.log(response);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        navigate("/my-profile");
      }
    } catch (err) {
      setStatus("Something went wrong");
    }
  };

  return (
    <div>
      <h2>Log In</h2>
      <form onSubmit={create}>
        <label>username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default Login;
