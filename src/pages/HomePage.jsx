import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <center className="pt-5">
      <div>HomePage</div>
      <button onClick={() => navigate("/login")}></button>
    </center>
  );
};

export default HomePage;
