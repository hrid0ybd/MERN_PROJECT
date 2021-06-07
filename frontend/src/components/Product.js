import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded card">
      <a href={`/product/${product._id}`}>
        <Card.Img className="img" src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`} className="pname">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
      </Card.Body>

      <Card.Text as="div">
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
      </Card.Text>

      <Card.Text as="h3" className="price">
        ৳ {product.price}{" "}
      </Card.Text>
    </Card>
  );
};

export default Product;
