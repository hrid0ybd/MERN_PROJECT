import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Image,
  ListGroup,
  Button,
  ListGroupItem,
} from "react-bootstrap";

import products from "../products";
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              ></Rating>
            </ListGroup.Item>

            <ListGroup.Item>
              <span className="bold">Price:</span> ৳ {product.price}
            </ListGroup.Item>
            <ListGroupItem className="desc">
              <span className="bold">Description:</span> {product.description}{" "}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup className="textCenter">
            <ListGroupItem>
              <Row>
                <Col md={7}>Original Price:</Col>
                <Col md={5}>
                  <strong>৳ {product.price}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col md={7}> Discount Price: </Col>
                <Col md={5}>
                  <strong>
                    ৳{" "}
                    {product.discount
                      ? product.discount
                      : (product.discount = 0)}
                  </strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col md={7}> Updated Price: </Col>
                <Col md={5}>
                  <strong>৳ {product.price - product.discount}</strong>
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem>
              <Row>
                <Col md={6}> Status: </Col>
                <Col md={6}>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </Col>
              </Row>
            </ListGroupItem>

            <ListGroupItem className="btnCard">
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
