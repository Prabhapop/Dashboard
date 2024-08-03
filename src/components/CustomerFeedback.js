import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar as FaStarRegular } from "react-icons/fa";

const feedbacks = [
  {
    name: "Jenny Wilson",
    rating: 4.5,
    feedback:
      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which also was very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    rating: 5,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    rating: 4,
    feedback:
      "Normally wings are wings, but theirs are lean meaty and tender, and full of flavor.",
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} color="#FFD700" />
      ))}
      {[...Array(halfStars)].map((_, i) => (
        <FaStarHalfAlt key={i} color="#FFD700" />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <FaStarRegular key={i} color="#CCCCCC" />
      ))}
    </>
  );
};

const FeedbackCard = ({ name, rating, feedback }) => (
  <Card className="mb-3" style={{ backgroundColor: "#333", color: "#fff" }}>
    <Card.Body>
      <Row>
        <Col
          xs={2}
          className="d-flex align-items-center justify-content-center"
        >
          <div
            className="bg-primary rounded-circle"
            style={{ width: "320px", height: "40px" }}
          ></div>
        </Col>
        <Col xs={10}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <StarRating rating={rating} />
          </Card.Text>
          <Card.Text>{feedback}</Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const CustomerFeedback = () => (
  <div className="container mt-5">
    {feedbacks.map((feedback, index) => (
      <FeedbackCard key={index} {...feedback} />
    ))}
  </div>
);

export default CustomerFeedback;
