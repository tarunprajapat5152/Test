import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Formik, Form } from "formik";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { IoCamera } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import { useUpdateProfileMutation, useProfileDataMutation } from "../../services/services";
import Inputs from "../../components/Input";
import { profileSchema } from "../../schemas";
import profileImage from "../../assets/user.png";
import "./index.css";

function Profile({show, setShow}) {
  const [isEditable, setIsEditable] = useState(false);
  const [profilePic, setProfilePic] = useState(profileImage);
  const [profileData, setProfileData] = useState(null);
  const [email, setEmail] = useState("");
  const [nextEmail, setNextEmail] = useState("");
  const [nextFirstName, setNextFirstName] = useState("");
  const [nextLastName, setNextLastName] = useState("");
  const [updateProfile] = useUpdateProfileMutation();
  const [fetchProfileData] = useProfileDataMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.sub;
        setEmail(userEmail);
        setNextEmail(userEmail);
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.warn("Token not found in localStorage");
    }
  }, []);

  useEffect(() => {
    if (show) {
      const getProfileData = async () => {
        try {
          const res = await fetchProfileData({ email: nextEmail }).unwrap();
          setProfilePic(res.url);
          setProfileData(res);
          setNextFirstName(res.firstName);
          setNextLastName(res.lastName);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };

      if (nextEmail) {
        getProfileData();
      }
    }
  }, [show, nextEmail]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values) => {
    setIsEditable(false);
    const formData = new FormData();

    formData.append(
      "userDto",
      new Blob(
        [
          JSON.stringify({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.phoneOrEmail,
          }),
        ],
        { type: "application/json" }
      )
    );

    if (profilePic !== profileImage) {
      const fileInput = document.getElementById("profilePic");
      if (fileInput.files[0]) {
        formData.append("file", fileInput.files[0]);
      }
    }

    try {
      const response = await updateProfile(formData).unwrap();
      if (response.status == "200") {
        setNextFirstName(values.firstName);
        setNextLastName(values.lastName);
        toast.success(response.message);
        handleClose();
      } else {
        toast.error(response.message);
        handleClose();
      }
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  const initialValues = {
    firstName: nextFirstName || "",
    lastName: nextLastName || "",
    phoneOrEmail: nextEmail,
  };

  const handleKeyDown = (e, handleSubmit) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleEditable = () => {
    setIsEditable((prev) => !prev);
    handleBgEdit();
  };

  return (
    <>
      <Modal
        show={show}
        onHide={setShow}
        className="ps-0"
        size="md"
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title className="w-100">
            <div className="d-flex flex-column justify-content-center align-items-center w-100">
              <div className="d-flex flex-column align-items-center position-relative text-center">
                <div className="p-2 w-100 h-100 position-relative">
                  <img
                    src={profilePic}
                    alt="profile image"
                    className="profile-img rounded-circle p-0"
                  />
                  <label
                    htmlFor="profilePic"
                    className={`position-absolute bottom-0 end-0 crs me-4 pe-3 pb-1 mb-1 ${
                      isEditable ? "" : "disabled"
                    }`}
                  >
                    <div className="camera-circle rounded-circle bg-white border d-flex align-items-center justify-content-center">
                      <IoCamera className="fs-5 fw-bold text-dark" />
                    </div>
                  </label>
                  <input
                    type="file"
                    id="profilePic"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                    accept="image/*"
                    disabled={!isEditable}
                  />
                </div>
                <span>
                  <h6 className="fs-5 mt-1 mb-0 text-center">
                    {nextFirstName} {nextLastName}
                  </h6>
                  <p className="text-muted fs-7 mb-0 text-center">
                    {nextEmail}
                  </p>
                </span>
              </div>
              </div>

              <div className="d-flex justify-content-end mt-2">
                <button
                  className="editBtn text-opacity-100 bg-transparent text-success btn-sm btn btn-outline-success d-flex justify-content-center align-items-center fs-6 crs"
                  onClick={toggleEditable}
                >
                  <span>
                    <FiEdit className="fs-4 pe-1" />
                  </span>
                  <span className="pt-1">{isEditable}Edit</span>
                </button>
            
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className=" mx-md-5 mx-lg-5 px-lg-3">
          <Formik
            initialValues={initialValues}
            validationSchema={profileSchema}
            onSubmit={handleSubmit}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form
                id="formik-form"
                onKeyDown={(e) => handleKeyDown(e, formik.handleSubmit)}
              >
                <label htmlFor="firstName" className="fs-7 fw-medium ms-1">
                  First Name
                </label>
                <Inputs
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  icon={<AiOutlineUser />}
                  formik={formik}
                  disabled={!isEditable}
                />
                <label htmlFor="lastName" className="fs-7 fw-medium ms-1">
                  Last Name
                </label>
                <Inputs
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  icon={<AiOutlineUser />}
                  formik={formik}
                  disabled={!isEditable}
                />
                <label htmlFor="phoneOrEmail" className="fs-7 fw-medium ms-1">
                  Gmail or Number
                </label>
                <Inputs
                  name="phoneOrEmail"
                  type="text"
                  placeholder={email || "Enter your Gmail or number"}
                  icon={<AiOutlineMail />}
                  formik={formik}
                  disabled
                />
              </Form>
            )}
          </Formik>
        </Modal.Body>

        <Modal.Footer className="justify-content-end">
          <Button
            className="bg-btn-grey border-0 py-2 px-3"
            onClick={()=>(setShow(false))}
          >
            Close
          </Button>
          <Button
            type="submit"
            form="formik-form"
            className="bg-whole fw-medium border-0 py-2 px-3"
            disabled={!isEditable}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Profile;
