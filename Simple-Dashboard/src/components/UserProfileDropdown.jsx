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
    <Dropdown>
      <Dropdown.Toggle
        className="bg-white border-white "
        id="dropdown-basic"
      >
        <img
          className="profile-image"
          src={imageUrl}
          alt="User profile"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu className="profile-menu">
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/">Dashboard</Link></Dropdown.Item>
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/products">Products</Link></Dropdown.Item>
          <Dropdown.Item><Link className="text-decoration-none text-dark" to="/users">Users</Link></Dropdown.Item>
          <Dropdown.Item className="logout-option">
            <CgLogOut className="logout-icon" onClick={handleLogout}/> <Link className="text-decoration-none text-dark" onClick={handleLogout}>Log Out</Link>
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}


