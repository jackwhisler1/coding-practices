import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";

function Home() {
  const caloriesInput: Array<number | string> = [];
  const [input, setInput] = useState<string>("");

  const calorieCounting = () => {
    const inputArr = input.split(/\n/);
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i] !== "") {
        caloriesInput.push(Number(inputArr[i]));
      } else {
        caloriesInput.push("");
      }
    }
    console.log(caloriesInput.reduce((partialSum, a) => partialSum + a, 0));
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="tile mt-2">
        <form className="">
          <textarea className="mx-4 my-2 p-1" value={input} onChange={handleInput} />

          <Button onClick={calorieCounting} className="m-2 mb-5">
            Count Cals
          </Button>
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
