import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center footer py-3'>CopyRight &copy; DD商城</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer