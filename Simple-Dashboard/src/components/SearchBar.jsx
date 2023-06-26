import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { searchQuery } from "../store/action/actionCreator";
import '../css/Header.css';

export default function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div className="search-container">
      <Form className="search-form">
        <Form.Control
          type="search"
          placeholder="Search"
          className="search-input"
          aria-label="Search"
          name="query"
          onChange={(e) => dispatch(searchQuery(e.target.value))}
        />
        <Button variant="outline-secondary" className="search-button custom-button">Search</Button>
      </Form>
    </div>
  );
}
