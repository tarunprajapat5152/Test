import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import Input from "../Input";
import { useFormik } from "formik";
import { editModal } from "../../schemas";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { CgDetailsMore } from "react-icons/cg";
import { useCancelEventMutation } from "../../services/services";

function CancelModal({ show, setShow, cancelItems }) {
  const [apiFunction]=useCancelEventMutation();
  const cancelEvent=async()=>{
    const res=await apiFunction(cancelItems.eventUuid);
    console.log(res);
  }
  return (
    <>
      {/* Modal */}
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Col className="text-center fw-bold">Are you sure to cancel</Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-center">
              If you want to cancel your event, So you cancel your event. but it
              can be made negative impact on your profile. please keep event and
              make profit.
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-center">
              Place Price:{cancelItems.placePrice}
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-center">
              <button
                className="bg-success border-0 rounded text-white fw-medium px-2 py-1"
                onClick={() => {
                  setShow(false);
                }}
              >
                Keep Event
              </button>
            </Col>
            <Col className="text-center">
              <button className="bg-danger border-0 rounded text-white fw-medium px-2 py-1"
              onClick={cancelEvent}>
                Cancel Event
              </button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CancelModal;