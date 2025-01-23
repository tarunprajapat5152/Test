import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { CiEdit } from "react-icons/ci";
import { IoInformationCircle } from "react-icons/io5";
import EditModal from "../EditModal";
import CancelModal from "../CancelModal";
import DetailsModal from "../DetailsModal";
import "../../index.css";
//import { toast } from "react-toastify";
import { RiInformation2Fill } from "react-icons/ri";

const DashboardItems = ({
  items,
  setPayBtn,
  setCancelBtn,
  setRejectedPending,
  setEdit,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showDetailsData, setShowDetailsData] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const handleEdit = (event) => {
    setSelectedItem(event);
    setShow(true);
  };

  const showDetailedModal = (items) => {
    setShowDetailsData(items);
    setShowDetailsModal(true);
  };
  
  const handleCancel=(items)=>{
    setShowModal(true);
    setSelectedItem(items)
  }

  return (
    <>
      <Row className="bg-white shadow-sm rounded-4 mt-3 p-3 g-2 m-auto">
        <Col
          xs={12}
          sm={12}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={items.imageUrl}
            alt="Event"
            className="rounded-3 img-fluid"
            style={{ maxHeight: "150px", width: "100%" }}
          />
        </Col>

        <Col xs={12} sm={12} className="mt-2">
          <h5 className="fw-bold mb-1">
            {items.eventName}{" "}
            <button
              onClick={() => {
                showDetailedModal(items);
              }}
              className="border-0 bg-transparent"
            >
              <RiInformation2Fill />
            </button>{" "}
          </h5>
          <p className="fw-medium text-primary mb-1">
            {" "}
            {formatDate(items.startDate)}
          </p>
          <p className="text-muted mb-2">
          {items?.eventDetails?.length > 65 
    ? items.eventDetails.substring(0, 65) + "..." 
    : items.eventDetails}
          </p>

          <div className={`d-flex ${setCancelBtn?"justify-content-between":"justify-content-end"} mt-2`}>
          <Button
              className={`${
                setCancelBtn ? "d-block" : "d-none"
              } rounded-5 bg-danger border-0 text-white fw-medium px-3 py-1`}
              onClick={() => handleCancel(items)}
            >
              Cancel
            </Button>
            <Button
              className={`${
                setEdit ? "d-block" : "d-none"
              } rounded-5 bg-success border-0 text-white fw-medium px-3 py-1`}
              onClick={() => handleEdit(items)}
            >
              Edit
            </Button>
            <Button
              className={`${
                setPayBtn ? "d-block" : "d-none"
              } rounded-5 bg-primary border-0 text-white fw-medium px-3 py-1`}
              // onClick={() => handleEdit(items)}
            >
              Pay
            </Button>
            <p className={`${
                setRejectedPending ? "d-block" : "d-none"
              } text-danger fs-7 fw-medium`}>{setRejectedPending}...</p>
           
          </div>
        </Col>
      </Row>

      {selectedItem && (
        <EditModal selectedItem={selectedItem} show={show} setShow={setShow} />
      )}
      {selectedItem && (
        <CancelModal
          cancelItems={selectedItem}
          show={showModal}
          setShow={setShowModal}
        />
      )}
      {showDetailsData && (
        <DetailsModal
          selectedItem={showDetailsData}
          show={showDetailsModal}
          setShow={setShowDetailsModal}
        />
      )}
    </>
  );
};

export default DashboardItems;