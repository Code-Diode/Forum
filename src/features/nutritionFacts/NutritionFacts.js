import NutritionFactsTable from "./NutritionTable";
import AddFoodForm from "./AddFoodForm";
import React from "react";
import { useSelector } from "react-redux";
import { getUserStatus } from "../user/userSlice";
import { Link, useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NutritionFacts() {
  const isLoggedIn = useSelector(getUserStatus);
  const location = useLocation();
  return (
    <Row className="container">
      <Col className="add__item__form">
      <h2>Add an item: </h2>
      {/* <AddFoodForm></AddFoodForm> */}
      {isLoggedIn ? (
        <AddFoodForm />
      ) : (
        <main>
          <p>
            You must <Link to="/login" state={{ from: location }}>Login</Link>first, do it
          </p>
        </main>
      )}
      </Col>
      <Col lg={8} className="nutrition__table">
      <NutritionFactsTable />
      </Col>
    </Row>
  );
}

export default NutritionFacts;
