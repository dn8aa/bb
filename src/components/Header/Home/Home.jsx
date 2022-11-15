import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Home = ({ getProducts, products }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container d-flex justify-content-between flex-wrap mt-5">
      {products.map((item) => (
        <Card style={{ width: "18rem" }} className='m-3'>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{item.price}</ListGroup.Item>
            <ListGroup.Item>{item.amount}</ListGroup.Item>
          </ListGroup>
        </Card>
      ))}
    </div>
  );
};

export default Home;
