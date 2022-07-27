import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  let name = localStorage.getItem("username");

  return props.token ? (
    <div>
      <p>Welcome back, {name}!</p>
      <Link to="/all-posts">All Posts</Link>
      <Link to="/create-post">Create Post</Link>
      <Link to="/my-profile">Profile</Link>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <Link to="/all-posts">All Posts</Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
};

export default Navbar;
