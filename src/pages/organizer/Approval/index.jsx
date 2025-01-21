import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGetApprovalDashboardQuery } from "../../../services/services";
// import { img1 } from "../../assets/Constant";
import DashboardItems from "../../../components/DashboardItems";
import { jwtDecode } from "jwt-decode";
import { Spinner } from "react-bootstrap";

const Approval = () => {
  const [status, setStatus] = useState("Approved");
  const [eventData, setEventData] = useState(null);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const token = localStorage.getItem("token");
  let userEmail = null;
  let userRole = null;

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        userEmail = decodedToken.sub;
        userRole = decodedToken.role;
        setRole(userRole);
        setEmail(userEmail);
      } catch (error) {
        console.error("Token decoding failed:", error);
      }
    } else {
      toast.warn("Please login first");
      navigate("/login");
    }
  }, [token, navigate]);

  const {
    data: cartData,
    isLoading,
    error,
  } = useGetApprovalDashboardQuery({ email, status }, { skip: !email });

  useEffect(() => {
    if (error) {
      setEventData({ data: [] });
    } else {
      setEventData(cartData);
    }
  }, [cartData, error]);

  useEffect(() => {
    if (role === "USER") {
      toast.warn("User can't access");
      navigate("/login");
    }
  }, [role, navigate]);

  const handleTabClick = (tabName) => {
    setStatus(tabName);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "92%" }} className="forheight scroll ">
          <div className="tabs fs-7 d-flex justify-content-center mb-3 position-sticky top-0 my-bg z-1">
            <div
              className={`tab-btn bg-transparent border-0 rounded-0 px-2 px-md-3 py-2 mx-md-2 mx-0 text-center  crs ${
                status === "Approved" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Approved")}
            >
              Approved
            </div>
            <div
              className={`tab-btn bg-transparent border-0 text-center rounded-0 px-2 px-md-3 py-2 mx-md-2 mx-0 fw-medium crs ${
                status === "Pending" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Pending")}
            >
              Pending
            </div>
            <div
              className={`tab-btn bg-transparent border-0 text-center rounded-0 px-2 px-md-3 py-2 mx-md-2 mx-0 fw-medium crs ${
                status === "Rejected" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Rejected")}
            >
              Rejected
            </div>
          </div>
          <Row className="justify-content-start px-md-5 px-3 px-lg-3 px-xl-1 mx-xl-4">
            {isLoading ? (
              <div
                className="w-100 d-flex justify-content-center align-items-center"
                style={{ height: "400px" }}
              >
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : eventData?.data?.length > 0 ? (
              status == "Approved" ? (
                <Row className="g-2">
                  {eventData.data.map((event) => (
                    <Col
                      sm={6}
                      lg={4}
                      xs={12}
                      key={event.eventUuid}
                      className="m-auto m-sm-0 px-1 py-2"
                    >
                      <DashboardItems
                        items={event}
                        setPayBtn={true}
                        setCancelBtn={true}
                        setRejected={false}
                        setPending={false}
                        setEdit={false}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <Row className="g-2">
                  {eventData.data.map((event) => (
                    <Col
                      sm={6}
                      lg={4}
                      xs={12}
                      key={event.eventUuid}
                      className="m-auto m-sm-0 px-1 py-2"
                    >
                      <DashboardItems
                        items={event}
                        setPayBtn={false}
                        setCancelBtn={false}
                        setRejectedPending={status}
                        setEdit={false}
                      />
                    </Col>
                  ))}
                </Row>
              )
            ) : (
              <div className="d-flex flex-column col-12 justify-content-center align-items-center">
                <h1 className="text-color">No history events available.</h1>
              </div>
            )}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Approval;
