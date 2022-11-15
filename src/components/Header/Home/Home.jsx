import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";

const Home = ({ getProducts, products, deleteProduct }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-flex-start flex-wrap mt-5">
      {products.map((item) => (
        <Card style={{ width: "18rem" }} className="m-3">
          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: "320px" }}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.price}</ListGroup.Item>
            <ListGroup.Item>{item.amount}</ListGroup.Item>
          </ListGroup>
          <Link to={`/edit/${item.id}`}>
            <Button style={{ width: "100%" }} variant="light">
              Edit
            </Button>
          </Link>

          <Button onClick={() => deleteProduct(item.id)} variant="dark">
            Delete
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Home;
