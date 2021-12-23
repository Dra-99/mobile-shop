import React from 'react'
import { Container,Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">DD商城</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                        <Nav className="ml-auto">
                            <Nav.Link href="/cart">
                                <i className='fa fa-shopping-basket mx-1'></i>购物车
                            </Nav.Link>
                            <Nav.Link href="/login">
                                <i className='fa fa-user-circle mx-1'></i>登录
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
