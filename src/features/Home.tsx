import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";

function Home() {
  const caloriesInput: Array<number | string> = [];
  const [input, setInput] = useState<string>("");

  const calorieCounting = () => {
    const inputArr = input.split(/\n/);
    for (let i = 0; i < inputArr.length; i++) {
      caloriesInput.push(inputArr[i]);
    }
    console.log(caloriesInput);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    calorieCounting();
  };

  return (
    <>
      <div className="tile">
        <form>
          <label>
            Input:
            <textarea value={input} onChange={handleInput} />
          </label>
        </form>

        <Row className="tile">
          <Col className="bg-dark tile">a</Col>
          <Col className="bg-primary tile"></Col>
          <Col className="bg-dark tile"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
          <Col className="bg-dark"></Col>
          <Col className="bg-primary"></Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
