import React from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import AllPosts from "./components/AllPosts";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import ViewProfile from "./components/ViewProfile";
import NotFound from "./components/NotFound";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const params = useParams();
  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  return (
    <div className="App">
      <Navbar token={token} />
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/all-posts" element={<AllPosts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/view-profile/:userId" element={<ViewProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
