import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const FeedbackContainer = styled.div`
  background-color: #2c2c38;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  margin-top: 20px;
  height: 310px;
`;

const FeedbackTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 18px;
`;

const FeedbackItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #444;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CustomerName = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;
  margin-bottom: 5px;
`;

const StarIcon = styled(FaStar)`
  color: #f1c40f;
  margin-right: 5px;
  font-size: 12px;
`;

const Comment = styled.p`
  margin: 0;
  font-size: 12px;
  color: #ccc;
`;

const Feedback = () => {
  const feedbacks = [
    {
      name: "Jenny Wilson",
      avatar: "./21.jpeg",
      rating: 5,
      comment:
        "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
    },
    {
      name: "Dianne Russell",
      avatar: "./2.jpeg",
      rating: 5,
      comment:
        "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
    },
    {
      name: "Devon Lane",
      avatar: "./23.jpeg",
      rating: 4,
      comment:
        "Normally wings are wings, but theirs are lean, meaty, and tender.",
    },
  ];

  return (
    <FeedbackContainer>
      <FeedbackTitle>Customer's Feedback</FeedbackTitle>
      {feedbacks.map((feedback, index) => (
        <FeedbackItem key={index}>
          <CustomerInfo>
            <Avatar src={feedback.avatar} alt={`${feedback.name} avatar`} />
            <div>
              <CustomerName>{feedback.name}</CustomerName>
              <Rating>
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    color={i < feedback.rating ? "#f1c40f" : "#4a4a4a"}
                  />
                ))}
              </Rating>
            </div>
          </CustomerInfo>
          <Comment>{feedback.comment}</Comment>
        </FeedbackItem>
      ))}
    </FeedbackContainer>
  );
};

export default Feedback;
