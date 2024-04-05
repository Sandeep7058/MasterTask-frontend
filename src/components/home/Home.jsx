import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center text-bold">
        Organize Your Tasks and<br></br>
Stay Productive
        </h1>
        <p className="homepara">
          Become focused, organized, and calm with <br />
          todo app. The World's #1 task manager app.
        </p>
        <button class="home-btn p-2" onClick={()=>navigate('/signup')}>Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
