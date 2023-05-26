import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.svgrepo.com/show/101783/restaurant.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
           <strong>Find-Best Restaurant</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header