import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const EditProduct = ({addProduct}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [image, setImage] = useState("");

  function handleValue() {
    let newProduct = {
      name,
      price,
      amount,
      image,
    };

    addProduct(newProduct)

    setName("");
    setPrice("");
    setAmount("");
    setImage("");
  }

  return (
    <div className="container mt-5  text-center" style={{ width: "500px" }}>
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
      <Button
        onClick={() => handleValue()}
        variant="dark"
        size="lg"
        className="mt-2"
        style={{ width: "100px" }}
      >
        Add
      </Button>
    </div>
  );
};

export default EditProduct;
