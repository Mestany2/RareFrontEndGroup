/* eslint-disable */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>CHANGE ME</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link className="ps-relative" passHref href="/allCategories">
              <Nav.Link className="nav-topic">All Categories</Nav.Link>
            </Link>
            {/* <Link className="ps-relative" passHref href="/categories/new">
              <Nav.Link className="nav-topic">Create Category</Nav.Link>
            </Link> */}
            <Link passHref href="/delete-me">
              <Nav.Link>Delete Me</Nav.Link>
            <Link passHref href="/CreatePostForm">
              <Nav.Link>Create A Post</Nav.Link>
            </Link>
            <Link passHref href="/Feed">
              <Nav.Link>Feed</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
