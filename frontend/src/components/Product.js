import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from "react-router-dom"

const Product = ({product}) => {
    return (
        <Card className='m-2'>
            <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>
            <Card.Body>
                <Link style={{
                    textDecoration: "none"
                }} to={`/products/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Card.Text as='div' className='my-3'>
                    <Rating rating={product.rating} count={product.countInStock} />
                </Card.Text>
                <Card.Text as='h3'>
                    ￥{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
