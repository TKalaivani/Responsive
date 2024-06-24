import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter, Link } from 'react-router-dom';
import { useState } from 'react';
import CreateAccount from './CreateAccount';
import Login from './Login';
const MyNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <BrowserRouter>
        <Navbar expand="lg" className="bg-body-tertiary text-blue bg-white">
          <Container fluid>
            <Navbar.Brand href="#" className="mr-5">
              {/* <img src={""} width="40" height="20" className="ml-5" alt='logo' /> */}
              <p className="text-yellow">ATG.WORLD</p>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 text-blue border-rounded" style={{ maxHeight: "100px" }} navbarScroll>
                <div className='w-100 d-flex justify-content-center'>
                  <input
                    type="text"
                    className="form-control "
                    style={{ width: "500px" }} // Adjust the width here
                    placeholder="Search for your favorite groups in ATG"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>
              </Nav>
              <Form className="d-flex align-items-center">
                <Link to="#" className='mr-2 mt-1' style={{ textDecoration: 'none', color: 'black' }}  data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  create account
                </Link>
                <Dropdown show={isOpen} onToggle={toggleDropdown}>
                  <Dropdown.Toggle className="bg-transparent text-primary border-0" id="dropdown-basic">
                    It's free
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else here</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

       

     {/* Create account model */}
          <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" style={{maxWidth:"60%" ,maxHeight:"100%"}}>
              <div class="modal-content">
                <div class="modal-header text-success" style={{backgroundColor:"#EFFFF4"}}>
                  <p class="fs-6" id="staticBackdropLabel" className='ms-5' >
                     Let's learn, share & inspire each other with our passion for computer engineering. Sign up now
                  </p>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 <CreateAccount/>
                </div>
                
              </div>
            </div>
          </div>
      
      {/* login page */}
          <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog" style={{maxWidth:"60%" ,maxHeight:"100%"}}>
              <div class="modal-content">
                <div class="modal-header text-success" style={{backgroundColor:"#EFFFF4"}}>
                  <p class="fs-6" id="staticBackdropLabel" className='ms-5' >
                     Let's learn, share & inspire each other with our passion for computer engineering. Sign up now
                  </p>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 <Login/>
                </div>
                
              </div>
            </div>
          </div>
      </BrowserRouter>
    </>
  );
}

export default MyNavbar;
