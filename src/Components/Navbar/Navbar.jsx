import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("home");

  const handleScroll = (sectionId) => {
    setMenu(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });
  };


  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
          <li><p onClick={() => handleScroll("home")} className={menu === "home" ? "active" : ""} > Home </p></li>
          <li><p onClick={() => handleScroll("about")} className={menu === "about" ? "active" : ""} > About Me </p></li>
          <li><p onClick={() => handleScroll("skills")} className={menu === "skills" ? "active" : ""} > Skills </p></li>
          <li><p onClick={() => handleScroll("projects")} className={menu === "projects" ? "active" : ""} > Projects </p></li>
          <li><p onClick={() => handleScroll("contact")} className={menu === "contact" ? "active" : ""} > Contact </p></li>

            
        </ul>
        <div className="nav-connect"> <p onClick={() => handleScroll("contact")} className={menu === "contact" ? "active" : ""} > Connect with Me </p></div>

    </div>
  )
}

export default Navbar