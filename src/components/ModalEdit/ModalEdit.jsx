import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useLocation } from "react-router-dom";

function StaticExample({
  getOneProduct,
  oneProduct,
  updateProduct,

}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setPrice(oneProduct.price);
      setAmount(oneProduct.amount);

      setImage(oneProduct.image);
    }
  }, [oneProduct]);

  function handleValue() {
    let editedProduct = {
      name,
      price,
      amount,
      image,
    };
    updateProduct(params.id, editedProduct);
    setName("");
    setPrice("");
    setAmount("");
    setImage("");
  }

  return (
    <Modal.Dialog className="mt-5" style={{ width: "500px" }}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <InputGroup size="lg" className="mt-2">
          <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-lg">
            Name
          </InputGroup.Text>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="lg" className="mt-2">
          <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-lg">
            Price
          </InputGroup.Text>
          <Form.Control
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="lg" className="mt-2">
          <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-lg">
            Amount
          </InputGroup.Text>
          <Form.Control
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <InputGroup size="lg" className="mt-2">
          <InputGroup.Text style={{ width: "100px" }} id="inputGroup-sizing-lg">
            Image
          </InputGroup.Text>
          <Form.Control
            value={image}
            onChange={(e) => setImage(e.target.value)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </Modal.Body>

      <Modal.Footer className="mt-2">
        <Link to="/">
          <Button size="lg" onClick={() => handleValue()} variant="dark">
            Save changes
          </Button>
        </Link>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default StaticExample;
