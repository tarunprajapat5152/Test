import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { eventlogo } from "../../assets/Constant";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function Offcanvass({ show, setShow }) {
  let token = localStorage.getItem("token");

  return (
    <>
      <Offcanvas show={show} onHide={setShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="bg-black rounded-2 mt-4">
            <img className="px-2 py-2" src={eventlogo} alt="..." />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <NavLink
            to="/home"
            className="my-3 opacity-100 text-dark d-block text-decoration-none my-4"
          >
            Home
          </NavLink>
          <NavLink
            to="/event"
            className="my-3 opacity-100 text-dark d-block text-decoration-none  my-4"
          >
            Event
          </NavLink>
          <NavLink
            to="/about"
            className="my-3 opacity-100 text-dark d-block text-decoration-none  my-4"
          >
            About us
          </NavLink>
          <NavLink
            to="/cart"
            className="my-3 opacity-100 text-dark d-block text-decoration-none  my-4"
          >
            Cart
          </NavLink>
          {token ? (
            <Button variant="primary">Profile</Button>
          ) : (
            <NavLink
              to="/login"
              className="my-3 opacity-100 text-dark d-block text-decoration-none  my-4"
            >
              Login
            </NavLink>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Offcanvass;
