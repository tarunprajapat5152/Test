import React from "react";
import { Container, Spinner } from "react-bootstrap";
export const Loader = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center h-50">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );
};
