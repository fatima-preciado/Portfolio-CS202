import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
       <hr className="hr-margin" />
      <Link to="/project1"><span><marquee> PANIC PAL</marquee></span></Link>
       <hr className="hr-margin" />
      <Link to="/project2"><span><marquee>SHELF LIFE</marquee></span></Link>
    </div>
  );
}

export default Home;

