import React from 'react'
import products from '../products'
import {Link} from "react-router-dom"
import {Row, Container, Col, Image, ListGroup, Button} from "react-bootstrap"
import Rating from '../components/Rating'

const ProductScreen = ({match}) => {
    
    const curProduct = products.find(item => item._id === match.params.id);

    return (
        <>
            <Link to="/" className='btn btn-dark my-3'>
                返回首页
            </Link>
            <Container>
                <Row>
                    <Col md={5}>
                        <Image src={curProduct.image} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{curProduct.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>评价: <Rating rating={curProduct.rating} count={curProduct.numReviews} />
                            </ListGroup.Item>
                            <ListGroup.Item>价格: <span style={{
                                fontWeight: "bold"
                            }}>￥{curProduct.price}</span></ListGroup.Item>
                            <ListGroup.Item>描述: {curProduct.description}</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item>价格: {curProduct.price}</ListGroup.Item>
                            <ListGroup.Item>库存: {curProduct.countInStock > 0 ? "有货" : "售磐"}</ListGroup.Item>
                            <ListGroup.Item className='text-center'>
                                <Button className='btn-block' type='button' disabled={curProduct.countInStock === 0}>添加购物车</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ProductScreen
