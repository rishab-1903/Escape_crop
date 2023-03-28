import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Home from './page/Home';
import Resources from './page/Resources';
import Lab from './page/Lab';
import SignIn from './page/SignIn';
import Scheme from './page/Scheme';

import { Container, Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="success" variant="dark" expand="md" fixed="top">
        <Container>
          <Navbar.Brand href="#">Escape</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarsExampleDefault" />
          <Navbar.Collapse id="navbarsExampleDefault">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="http://localhost:8501/">Lab</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/scheme">Schemes</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/sign-in">Sign In</Nav.Link>
              </Nav.Item>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/lab" element={<Lab />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/scheme" element={<Scheme />} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
