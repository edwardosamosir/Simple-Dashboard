import React, { useState, useEffect } from "react";
import { Col, Button, Collapse } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineAppstore, AiOutlineMenu } from "react-icons/ai";
import { FaBoxes } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "../css/Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Initial state based on window width
  const navigate = useNavigate();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Col
      md={2}
      className="justify-content-center align-items-center sidebar-col"
      style={{ fontFamily: "Poppins", backgroundColor: "rgba(235,245,255,255)" }}
    >
      <Button
        className="d-md-none" // Only visible in small screens
        variant="outline-dark"
        onClick={() => setIsOpen(!isOpen)} // Toggle collapse
        style={{ position: "fixed", right: 0, zIndex: 1030 }}
      >
        <AiOutlineMenu size={26} />
      </Button>


      <Collapse in={isOpen} unmountOnExit>
        <div className="d-flex flex-column mt-3">
          <Link className="text-decoration-none text-dark" to={"/"}>
            <div className="d-flex align-items-center my-4" style={{ fontFamily: "Poppins" }}>
              <img className="sidebar-logo" src="https://cdn-icons-png.flaticon.com/512/5230/5230364.png" alt="logo" />
              <div className="text-center sidebar-title">Administration System</div>
            </div>
          </Link>
          <ul className="list-group mt-4">
            <Link className="text-decoration-none text-dark" to={"/"}>
              <li className="mt-3 hover sidebar-item">
                <AiOutlineAppstore className="text-success sidebar-icon" size={26} /> Dashboard
              </li>
            </Link>
            <Link className="text-decoration-none text-dark" to={"/users"}>
              <li className="mt-3 hover sidebar-item">
                <FaUsers className="text-info sidebar-icon" size={26} /> Users
              </li>
            </Link>
            <Link className="text-decoration-none text-dark" to={"/products"}>
              <li className="mt-3 hover sidebar-item">
                <FaBoxes className="text-secondary sidebar-icon" size={26} /> Products
              </li>
            </Link>
            <Link className="text-decoration-none text-dark" to={"/login"}>
              <li className="mt-3 hover sidebar-item">
                <FiLogOut className="text-danger sidebar-icon" size={26} onClick={handleLogout} /> <Link className="text-decoration-none text-dark" onClick={handleLogout}>
                  Log Out</Link>
              </li>
            </Link>
          </ul>
        </div>
      </Collapse>
    </Col>
  );
}
