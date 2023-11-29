import React from "react";
import Card from "react-bootstrap/Card";
import "./Style.css";

function Cards(props) {
  return (
    <div
      style={{
        color: props.color,
        backgroundColor: props.bgColor,
        width: props.width,
        height: props.height,
      }}
    >
      <Card className="cardd">
        <Card.Img variant="top" src={props.icon} />
        <Card.Body>
          <Card.Text>
            <h6 className="textcard">{props.text}</h6>
          </Card.Text>
          <Card.Title>
            <h5 className="titlecard">{props.title}</h5>
          </Card.Title>
          <div className="plus-btn">{props.plus}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
