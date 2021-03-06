import React from 'react'
import {Row, Col} from "react-bootstrap"
import products from "../products.js";
import Product from "../components/Product"

const HomeScreen = () => {
    return (
        <>
            <h1>全部商品</h1>
            <Row>
                {products.map(item => <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={item} />
                </Col>)}    
            </Row>   
        </>
    )
}

export default HomeScreen
