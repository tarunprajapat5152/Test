import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import newyear from "../../assets/newyear.jpg";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import { MdErrorOutline } from "react-icons/md";
import Accordionn from "../../components/Accordion";
import { useRef } from "react";
import Input from "../../components/Input";
import { useFormik } from "formik";
import Select from "../../components/Select";

function Organiser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      textarea: "",
      category: "",
      text: "",
      city: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      quantity: "",
      price: "",
    },
    // validationSchema:({}),
    onSubmit: (values) => {
      // console.log(values);
    },
  });
  
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(newyear);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handelChange = () => {
    fileInputRef.current.click();
  };
  
  const handelFile = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const url = URL.createObjectURL(file);
      localStorage.setItem("uploadedImage", url);
      setImage(url)
    }
  }

  const handleRemoveImage = () => {
    localStorage.removeItem("uploadedImage");
    setImage(newyear); // Reset to the default image
  };

  const category = ["Fortuner", "Thar", "RollsRoys", "Sports"];

  return (
    <Container className="mt-5">
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={12} lg={6}>
            <div className="h-75 w-100 rounded-4">
              <img className="h-100 w-100 rounded-4" src={image} alt="..." />
            </div>
            <div className="mt-4">
              <div className="d-flex align-items-center">
                <Button className="bg-transparent text-danger border-0" onClick={handleRemoveImage}>
                  <RiDeleteBin6Line className="pb-1" size={25} /> Remove
                </Button>
                <input
                  type="file"
                  accept="image/*"
                  name="myfile"
                  ref={fileInputRef}
                  onChange={handelFile}
                  hidden
                />
                <Button
                  className="ms-4"
                  variant="secondary"
                  onClick={handelChange}
                >
                  Change
                </Button>
              </div>
            </div>
          </Col>
          <Col
            md={12}
            lg={6}
            className="mt-4 mt-lg-0"
          >
            <h3 className="fw-bold mb-3">
              <MdErrorOutline className="pb-2" color="blue" size={40} /> General
              information
            </h3>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Input
                name="name"
                type="text"
                formik={formik}
                placeholder="input description"
                bg="bg-body-secondary"
                label="Name *"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="fw-bold m-0">Description</Form.Label>
              <textarea
                className="d-block w-100 rounded-3 px-3 py-1 bg-body-secondary border-0"
                name="textarea"
                style={{ outline: "none" }}
                rows={2}
                onChange={formik.handleChange}
                value={formik.values.textarea}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Select name="category" label="Category" value={category} formik={formik} />
            </Form.Group>
          </Col>
        </Row>
        <Accordionn formik={formik} />
        <div className="d-flex justify-content-between mt-3 pb-2">
          <Button className="px-3 fs-5 align-item-center" variant="secondary">
            Cancel
          </Button>
          <Button className="px-5 fs-5" variant="primary" type="submit">
            Next
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default Organiser;
