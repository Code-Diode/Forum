import React from "react";
import Alert from "react-bootstrap/Alert";
import { Link } from "react-router-dom";

function LoginAlert({ location }) {
  return (
    <main>
      <Alert variant="info">
        You have to{" "}
        <Link to="/login" state={{ from: location }}>
          Login
        </Link>{" "}
        first
      </Alert>
    </main>
  );
}
export default LoginAlert;
