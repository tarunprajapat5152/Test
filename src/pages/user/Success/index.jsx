import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSuccessQuery } from "../../../services/services";
import { payment } from "../../../assets/Constant";
import "./style.css";

const Success = () => {
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");

 if (!sessionId) {
    navigate("/");
  }

  const { isLoading, isError } = useSuccessQuery(sessionId);

  const handleBack = () => {
    navigate("/");
  };

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
      <Button
        className="fw-bold border-0 mt-3"
        variant="danger"
        style={{ background: "#f5167e" }}
        disabled={isLoading}
        onClick={handleBack}
      >
        Back to Home
      </Button>
    </div>
  );
};

export default Success;
