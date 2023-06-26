import React from "react";
import { Row } from "react-bootstrap";
import "../css/Footer.css";

export default function Footer() {
  return (
    <Row className="footer-container p-2 mb-0 py-3 border border-1">
      <footer className="py-1 my-1">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-2 text-muted">
              About us
            </a>
          </li>
        </ul>
        <p className="footer-copyright text-muted">© 2023 Samosir Bersaudara Tbk.</p>
      </footer>
    </Row>
  );
}
