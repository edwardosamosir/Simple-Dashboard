import React from 'react';
import { Button, Form } from 'react-bootstrap';
import '../css/Header.css';

export default function SearchBar() {
  return (
    <div className="search-container">
      <Form className="search-form">
        <Form.Control
          type="search"
          placeholder="Search"
          className="search-input"
          aria-label="Search"
        />
        <Button variant="outline-secondary" className="search-button custom-button">Search</Button>
      </Form>
    </div>
  );
}
