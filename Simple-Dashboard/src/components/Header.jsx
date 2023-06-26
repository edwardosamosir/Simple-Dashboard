import React from 'react';
import { Row, Stack } from 'react-bootstrap';
import SearchBar from './SearchBar';
import UserProfileDropdown from './UserProfileDropdown';
import '../css/Header.css';

export default function Header() {
  return (
    <Row className="header-container">
      <Stack className="header-stack" direction="horizontal" gap={3}>
        <SearchBar />
        <div className="admin-name">Admin Name</div>
        <UserProfileDropdown />
      </Stack>
    </Row>
  );
}
