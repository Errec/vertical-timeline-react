import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return <div className="home">
    <Link to="/shopping-list">
        <button>Login</button>
      </Link>
    </div>;
}

export default Home