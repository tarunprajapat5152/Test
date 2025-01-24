import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useOrganizerApprovalQuery } from "../../services/services";
import { useContext } from "react";
import { AppContext } from "../../routes/AppRoutes";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";
import { useEventApprovalQuery } from "../../services/services";

const AdminDashboardItems = ({ items, setOrganizerBtn, setEventsBtn }) => {
  const { setUpdate } = useContext(AppContext);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [uuid, setUuid] = useState("");

  const { data, isLoading } = useOrganizerApprovalQuery(
    { email, status },
    {
      skip: !email || !status,
    }
  );

  const { data: eventData, isLoading: loading } = useEventApprovalQuery(
    { uuid, status },
    {
      skip: !uuid || !status,
    }
  );

  useEffect(() => {
    if (data?.status == 200 && data?.message == "Successfully updated") {
      toast.success("Data Updated Successfully");
      setUpdate(true);
    }
  }, [data]);

  useEffect(() => {
    if (eventData?.message == "update status") {
      toast.success("Data Updated Successfully");
      setUpdate(true);
    }
  }, [eventData]);

  function handleOrganizerBtns(items, str) {
    setEmail(items.email);
    setStatus(str);
  }

  function handleEventBtns(items, str) {
    setUuid(items.uuid);
    setStatus(str);
  }

  return (
    <>
      <Row className="bg-white shadow-sm rounded-4 mt-3 p-3 g-2 m-auto">
        <Col
          xs={12}
          sm={12}
          className={`${
            setOrganizerBtn ? "d-none" : "d-flex"
          } justify-content-center align-items-center`}
        >
          <img
            src={items.imageUrl}
            alt="Event"
            className="rounded-3 img-fluid"
            style={{ height: "150px", width: "100%" }}
          />
        </Col>

        <Col xs={12} sm={12} className="mt-2">
          <div
            className={`${setOrganizerBtn ? "d-none" : "d-flex"} flex-column`}
          >
            <div className="d-flex justify-content-between">
              <h5 className="fw-bold mb-1">{items.eventName}</h5>{" "}
              <p className="fw-medium text-primary mb-1">
                {" "}
                {items.startDate}
              </p>
            </div>
            <p className="mb-1">Organizer:-{items.organizerName}</p>
            <p className="mb-1">email:-{items.email}</p>
            <p className="text-muted mb-2 text-break">
            {items?.eventDetails?.length > 65 
    ? items.eventDetails.substring(0, 65) + "..." 
    : items.eventDetails}

            </p>
          </div>

          <div
            className={`${
              setOrganizerBtn ? "d-flex" : "d-none"
            } flex-column gap-2`}
          >
            <p className="fw-medium mb-0">{items.email}</p>
            <p className="fw-medium mb-0">
              {items.organizationName || "no shop"}
            </p>
            <p className="fw-medium mb-0">
                Description:-
              {" "}
              {items?.details?.split(" ").length > 10
                ? items.details.split(" ").slice(0, 10).join(" ") + "..."
                : items.details}
            </p>
            <p className="fw-medium mb-0">attempts: {items.attempts}</p>
          </div>
          <div
            className={`justify-content-between ${
              setOrganizerBtn ? "d-flex" : "d-none"
            } mt-2`}
          >
            <Button
              className="rounded-5 bg-danger border-0 text-white fw-medium px-3 py-1"
              onClick={() => handleOrganizerBtns(items, "Rejected")}
              disabled={isLoading}
            >
              Reject
            </Button>
            <Button
              className=" rounded-5 bg-success border-0 text-white fw-medium px-3 py-1"
              onClick={() => handleOrganizerBtns(items, "Approved")}
              disabled={isLoading}
            >
              Approve
            </Button>
          </div>

          <div
            className={`justify-content-between ${
              setEventsBtn ? "d-flex" : "d-none"
            } mt-2`}
          >
            <Button
              className="rounded-5 bg-danger border-0 text-white fw-medium px-3 py-1"
              onClick={() => handleEventBtns(items, "Rejected")}
              disabled={loading}
            >
              Reject
            </Button>
            <Button
              className="rounded-5 bg-success border-0 text-white fw-medium px-3 py-1"
              onClick={() => handleEventBtns(items, "Approved")}
              disabled={loading}
            >
              Approve
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AdminDashboardItems;
