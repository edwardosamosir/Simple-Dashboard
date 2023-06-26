import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <Row className="bg-white h-100">
        <Sidebar 
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={handleSidebarToggle}
        />
        <Col
          md={isSidebarOpen ? 10 : 12}
          className="bg-light border border-1 d-flex flex-column"
        >
          <Header onSidebarToggle={handleSidebarToggle} />
          <Row className="justify-content-center p-2 px-5 bg-light flex-grow-1 overflow-auto">
            <Outlet />
          </Row>
          <Footer className="fixed-bottom" />
        </Col>
      </Row>
    </div>
  );
}
