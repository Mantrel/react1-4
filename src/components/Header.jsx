import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, Button } from 'react-bootstrap'

const Header = ({ setValorBusqueda }) => {

    const [valorCaja, setValorCaja] = useState('');

    
    return (
        
        <Navbar bg="warning" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand style={{color: 'black'}} href="/">The Simpsons</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="nabvarScroll">
                    <Nav
                        className="me.auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        
                    >

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control

                            type="search"
                            placeholder="Buscador"
                            className="me-2"
                            aria-label="Search"
                            

                            onChange={(e) => setValorCaja(e.target.value)}
                        />
                        <Button onClick={() => setValorBusqueda(valorCaja)}>Buscar</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
        
    )
};

export default Header
