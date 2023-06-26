import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';
import { CgLogOut } from 'react-icons/cg';
import '../css/Header.css';

export default function UserProfileDropdown() {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };
  
  const imageUrl = localStorage.getItem('image')

  return (
    <Dropdown style={{backgroundColor:"rgba(235,245,255,255) !important"}}>
      <Dropdown.Toggle 
        className="border-black"
        id="dropdown-basic"
        style={{backgroundColor: "rgba(235,245,255,255)"}}
      >
        <img
          className="profile-image bg-white"
          src={imageUrl}
          alt="User profile"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="profile-menu">
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/">Dashboard</Link></Dropdown.Item>
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/users">Users</Link></Dropdown.Item>
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/products">Products</Link></Dropdown.Item>
          <Dropdown.Item className="logout-option">
            <CgLogOut className="logout-icon" onClick={handleLogout}/> <Link className="text-decoration-none text-dark" onClick={handleLogout}>Log Out</Link>
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


