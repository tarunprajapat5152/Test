import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { SlLocationPin } from "react-icons/sl";
import { BsTicket } from "react-icons/bs";
import Input from "../Input";
import Select from "../Select";
import { useRegisterFilterQuery } from "../../services/services";
import { googlemap } from "../../assets/Constant";

function Accordionn({ formik }) {
  // console.log(formik);

  // const citys = ["Khategaon", "Indore", "Bhopal", "Mumbai"];
  const { data } = useRegisterFilterQuery();
  const filteredVenues = data?.filter((item) => item.city === formik.values.city);
  console.log("filteredVenues--", filteredVenues, "------", formik.values.city);
  
  const selectedVenue = filteredVenues?.find((item)=> item.venueName === formik.values.venueName);
  console.log("selectedVenue--", selectedVenue);
  
  // const [select, setSelectedItem] = useState("");

  // data.map((value)=>{
  //   console.log(value.rentalCost);
  // })

  return (
    <Accordion className="mt-4" defaultActiveKey="0">
      <Accordion.Item className="light border-0" eventKey="0">
        <Accordion.Header>
          <SlLocationPin className="me-3" color="blue" size={25} />
          <h5 className="fw-bold m-0">Location and time</h5>
        </Accordion.Header>
        <Accordion.Body className="p-0 pt-4">
          <Row>
            <Col md={12} lg={6}>
              <h4 className="fw-bold fs-5">Location </h4>
              <p className="text-secondary">
                You can choose the location or pinpoint it on the map
              </p>
              {data && (
                <div>
                  <Select
                    name="city"
                    label="City"
                    value={data?.map((value) => value?.city)} // Pass an array of city names
                    formik={formik}
                  />
                  <Select
                    name="venueName"
                    label="VenueName"
                    value={filteredVenues?.map((value) => value.venueName)} // Pass an array of city names
                    formik={formik}
                  />
                  <Input
                    name="capacity"
                    type="number"
                    formik={formik}
                    value={selectedVenue?.capacity || ""}
                    placeholder="Capacity"
                    bg="bg-body-secondary"
                    label="Capacity"
                    readOnly="readOnly"
                  />
                  <Input
                    name="rentalCost"
                    type="number"
                    formik={formik}
                    value={selectedVenue?.rentalCost || ""}
                    placeholder="RentalCost"
                    bg="bg-body-secondary"
                    label="RentalCost"
                    readOnly="readOnly"
                  />
                </div>
              )}
            </Col>
            <Col md={12} lg={6} className="mt-5 mt-lg-0">
              <div className="h-100 w-100 rounded-2">
                <img
                  className="h-100 w-100 rounded-2"
                  src={googlemap}
                  alt="..."
                />
              </div>
            </Col>
          </Row>
          <div className="mt-5">
            <h4 className="fw-bold">Time</h4>
            <p>Choose the start time and end time for your event</p>
            <Row>
              <Col>
                <Input
                  name="startDate"
                  type="date"
                  formik={formik}
                  bg="bg-body-secondary"
                  placeholder="input description"
                  label="Event Start"
                />
              </Col>
              <Col>
                <Input
                  name="endDate"
                  type="date"
                  formik={formik}
                  placeholder="input description"
                  bg="bg-body-secondary"
                  label="Event End"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  name="startTime"
                  type="time"
                  formik={formik}
                  placeholder="input description"
                  bg="bg-body-secondary"
                  label="Start Time"
                />
              </Col>
              <Col>
                <Input
                  name="endTime"
                  type="time"
                  formik={formik}
                  placeholder="input description"
                  bg="bg-body-secondary"
                  label="End Time"
                />
              </Col>
            </Row>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <hr />
      <Accordion.Item className="light border-0" eventKey="1">
        <Accordion.Header>
          <BsTicket className="me-3" color="blue" size={25} />
          <h5 className="fw-bold m-0">Ticket</h5>
        </Accordion.Header>
        <Accordion.Body className="p-0 pt-4">
          <Row>
            <Col>
              <Input
                name="quantity"
                type="number"
                formik={formik}
                placeholder="00"
                bg="bg-body-secondary"
                label="Quantity"
              />
            </Col>
            <Col>
              <Input
                name="price"
                type="number"
                formik={formik}
                placeholder="00"
                bg="bg-body-secondary"
                label="Price $"
              />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accordionn;
