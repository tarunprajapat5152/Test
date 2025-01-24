import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  useGetOrganizerPaymentSuccessQuery,
  useOrganizerSuccessQuery,
  useSuccessQuery,
} from "../../../services/services";
import { payment } from "../../../assets/Constant";
import "./style.css";

const Success = () => {
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");
<<<<<<< HEAD

 if (!sessionId) {
    navigate("/");
  }

  const { isLoading, isError } = useSuccessQuery(sessionId);
=======
  const key = localStorage.getItem("key");

  if (sessionId) {
    useSuccessQuery(sessionId, { enabled: sessionId && key === "cart" });
  } else navigate("/upevent");

  if (sessionId) {
    useGetOrganizerPaymentSuccessQuery(sessionId, { enabled: sessionId && key === "get-payment" });
  } else navigate("/upevent");
>>>>>>> 02b629cd91e0ad39b3e8534f225982c77e940d23

  const handleBack = () => {
    navigate("/");
  };
<<<<<<< HEAD

  return (
    <div className="text-center d-flex h-100 flex-column justify-content-center align-items-center">
      {isLoading ? (
        <div className="d-flex flex-column"><p>We Are Processing...</p>
        <p>Please don't go back</p></div>
      ) : isError ? (
        <p className="text-danger">Error processing your payment. Please try again later.</p>
      ) : (
        <>
          <img className="" src={payment} style={{ width: "230px", height: "230px" }} />
          <h1 className="fs-6 fw-bold">Payment Successfully</h1>
          <p className="fs-7">Thank you for your order</p>
        </>
      )}
=======

  if (sessionId) {
    useOrganizerSuccessQuery(sessionId, {
      enabled: sessionId && key === "event-payment",
    });
  } else navigate("/placeorder");

  return (
    <div className="text-center d-flex h-100 flex-column justify-content-center align-items-center">
      <img
        className=""
        src={payment}
        style={{ width: "230px", height: "230px" }}
      />
      <h1 className="fs-6 fw-bold">Payment Successfully</h1>
      <p className="fs-7">Thankyou for your order</p>
>>>>>>> 02b629cd91e0ad39b3e8534f225982c77e940d23
      <Button
        className="fw-bold border-0 mt-3"
        variant="danger"
        style={{ background: "#f5167e" }}
<<<<<<< HEAD
        disabled={isLoading}
=======
>>>>>>> 02b629cd91e0ad39b3e8534f225982c77e940d23
        onClick={handleBack}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Success;
