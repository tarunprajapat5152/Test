import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useMatch } from "react-router-dom";

function SideOffcanvas({ show, setShow }) {
  const eventsMatch = useMatch("/events");
  const payoutsMatch = useMatch("/payouts");
  const approvalMatch = useMatch("/approval");
  const historyMatch = useMatch("/history");

  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => {
          setShow(false);
        }}
        responsive="lg"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column">
          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Events
          </Link>

          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              approvalMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Approval
          </Link>
          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Add Event
          </Link>
          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              historyMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            History
          </Link>
          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              payoutsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Payouts
          </Link>
          <Link
            to="/events"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Bank Details
          </Link>
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="mb-3 text-center text-danger text-decoration-none"
          >
            <CiLogout /> Logout
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideOffcanvas;
