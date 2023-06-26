import React from 'react';
import { Row, Stack } from 'react-bootstrap';
import SearchBar from './SearchBar';
import UserProfileDropdown from './UserProfileDropdown';
import '../css/Header.css';

export default function Header() {
  const firstName = localStorage.getItem('firstName')
  const lastName = localStorage.getItem('lastName')

  return (
    <Row className="header-container">
      <Stack className="header-stack" direction="horizontal" gap={3}>
        <SearchBar />
        <div className="admin-name">{`${firstName} ${lastName}`}</div>
        <UserProfileDropdown />
      </Stack>
    </Row>
  );
}
