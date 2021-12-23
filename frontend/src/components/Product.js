import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <Card className='m-2'>
            <a href={`/products/${product._id}`}>
                <Card.Img src={product.image} />
            </a>
            <Card.Body>
                <a style={{
                    textDecoration: "none"
                }} href={`/products/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </a>
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