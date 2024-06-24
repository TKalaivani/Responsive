import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Link } from 'react-router-dom';
import { MdGroupAdd } from "react-icons/md";

// import { useState } from 'react';
const PostNavbar = () => {
  return (

<BrowserRouter>
    <Navbar
    expand="lg"
    className="bg-body-tertiary text-blue bg-light"
    // fixed="top"
    >
       
    <Container fluid>
    <Link className="mr-5 text-xl  " style={{ textDecoration: 'none', color: 'black' }} to={"#"}>
            AllPosts(32)
        </Link>
      <Navbar.Toggle aria-controls="navbarScroll"  />
      <Navbar.Collapse id="navbarScroll" className="ms-5">
        <Nav
          className="me-auto my-2 my-lg-0 text-blue"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
         

          <Link className="mr-5 text-xl text-muted" style={{ textDecoration: 'none', color: 'black' }} to={"#"}>
            Article
          </Link>

         
          <Link className="mr-4 text-xl text-muted"  style={{ textDecoration: 'none', color: 'black' }}to={"#"}>
            Event
          </Link>
          
          <Link className="mr-4 text-xl text-muted"  style={{ textDecoration: 'none', color: 'black' }}to={"#"}>
            Education
          </Link>

          <Link className="mr-4 text-xl text-muted"  style={{ textDecoration: 'none', color: 'black' }}to={"#"}>
            Job
          </Link>
        </Nav>
        
        <Form className="d-flex mr-2">
          
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle bg-muted mr-2" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown button
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>

          <Link to={"#"}>
            <Button variant="primary"><MdGroupAdd  className='m-1'/> Join Group</Button>
          </Link>

          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
</BrowserRouter>

  )
}

export default PostNavbar