import NutritionFactsTable from "./NutritionTable";
import AddFoodForm from "./AddFoodForm";
import React from "react";
import { useSelector } from "react-redux";
import { getUserStatus } from "../user/userSlice";
import { Link, useLocation } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginAlert from "../../Components/LoginAlert";

function NutritionFacts() {
  const isLoggedIn = useSelector(getUserStatus);
  const location = useLocation();
  return (
    <Row className="container">
      <Col lg="auto" md="auto" sm={12} xs={12} className="add__item__form">
        <h2>Add an item: </h2>
        {isLoggedIn ? (
          <AddFoodForm />
        ) : (
          <LoginAlert location={location}/>
        )}
      </Col>
      <Col className="nutrition__table">
        <NutritionFactsTable />
      </Col>
    </Row>
  );
}

export default NutritionFacts;
