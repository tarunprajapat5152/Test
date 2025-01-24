import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useMatch } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function SideOffcanvas({ show, setShow }) {
  const [role,setRole]=useState("");
  const eventsMatch = useMatch("/eventorganizer");
  const payoutsMatch = useMatch("/payouts");
  const approvalMatch = useMatch("/approval");
  const historyMatch = useMatch("/history");
  
  useEffect(()=>{
  const token=localStorage.getItem("token");
  setRole(jwtDecode(token).role);
  },[])

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
        <div className={`flex-column gap-4 ${role == "ORGANIZER" ? "d-flex" : "d-none"}`}>
        <Link
            to="/eventorganizer"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Events
          </Link>

          <Link
            to="/approval"
            className={`mb-3 text-center text-dark text-decoration-none ${
              approvalMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Approval
          </Link>
          <Link
            to="/addevent"
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
            to="/history"
            className={`mb-3 text-center text-dark text-decoration-none ${
              payoutsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Payouts
          </Link>
            </div>
            <div className={`flex-column gap-4 ${role == "ADMIN" ? "d-flex" : "d-none"}`}>
            <Link
            to="/eventadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Events
          </Link>
          <Link
            to="/approvaladmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Approval
          </Link>
          <Link
            to="/blogsadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Blogs
          </Link>
          <Link
            to="/historyadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            History
          </Link>
          <Link
            to="/payoutsadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Payouts
          </Link>
          <Link
            to="/placesadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Places
          </Link>
          <Link
            to="/bankadmin"
            className={`mb-3 text-center text-dark text-decoration-none ${
              eventsMatch ? "text-dark fw-bold" : "custom-style text-dark"
            }`}
          >
            Bank Details
          </Link>
            </div>
          <Link
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="my-3 text-center text-danger text-decoration-none"
          >
            <CiLogout /> Logout
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideOffcanvas;
