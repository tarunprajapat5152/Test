import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
// import { img1 } from "../../assets/Constant";
import img1 from "../../../assets/image1.svg";

const History = () => {
  const [activeTab, setActiveTab] = useState("Completed");
  const eventData = [
    {
      uuid: "1",
      eventName: "Music Concert",
      eventDetails: "An amazing night of live music!",
      city: "Los Angeles",
      placeAddress: "The Comedy Store",
      startDate: "2025-02-15",
      endDate: "2025-02-16",
      ticketPrice: "50",
      imageUrl: img1,
      category: "Music",
    },
    {
      uuid: "2",
      eventName: "Dance Party",
      eventDetails: "Dance all night to the best beats.",
      city: "Los Angeles",
      placeAddress: "The Comedy Store",
      startDate: "2025-03-01",
      endDate: "2025-03-02",
      ticketPrice: "40",
      imageUrl: img1,
      category: "Dance",
    },
    {
      uuid: "3",
      eventName: "Comedy Show",
      eventDetails: "Laugh out loud at this hilarious comedy show.",
      city: "Chicago",
      placeAddress: "The Comedy Store",
      startDate: "2025-04-05",
      endDate: "2025-04-06",
      ticketPrice: "30",
      imageUrl: img1,
      category: "Comedy",
    },
  ];
  const eventData2 = [
    {
      uuid: "4",
      eventName: "Rock Concert",
      eventDetails: "A night with your favorite rock band.",
      city: "San Francisco",
      placeAddress: "The Fillmore",
      startDate: "2025-05-10",
      endDate: "2025-05-11",
      ticketPrice: "70",
      imageUrl: img1,
      category: "Music",
    },
    {
      uuid: "5",
      eventName: "Jazz Night",
      eventDetails: "Enjoy live jazz music from top artists.",
      city: "Los Angeles",
      placeAddress: "Jazz House",
      startDate: "2025-06-15",
      endDate: "2025-06-16",
      ticketPrice: "60",
      imageUrl: img1,
      category: "Music",
    },
    {
      uuid: "6",
      eventName: "Art Exhibition",
      eventDetails: "Explore beautiful art pieces at this exhibition.",
      city: "Paris",
      placeAddress: "Louvre Museum",
      startDate: "2025-07-20",
      endDate: "2025-07-21",
      ticketPrice: "80",
      imageUrl: img1,
      category: "Music",
    },
  ];
  const eventData3 = [
    {
      uuid: "7",
      eventName: "Art Exhibition",
      eventDetails: "Explore beautiful art pieces.",
      city: "Paris",
      placeAddress: "Louvre Museum",
      startDate: "2025-07-10",
      endDate: "2025-07-11",
      ticketPrice: "80",
      imageUrl: img1,
      category: "Music",
    },
    {
      uuid: "8",
      eventName: "Theater Play",
      eventDetails: "A dramatic theater performance.",
      city: "London",
      placeAddress: "West End",
      startDate: "2025-08-15",
      endDate: "2025-08-16",
      ticketPrice: "90",
      imageUrl: img1,
      category: "Music",
    },
    {
      uuid: "9",
      eventName: " Play",
      eventDetails: "A dramatic theater performance.",
      city: "London",
      placeAddress: "West End",
      startDate: "2025-08-15",
      endDate: "2025-08-16",
      ticketPrice: "$90",
      imageUrl: img1,
      category: "Music",
    },
  ];
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div style={{ width: "92%" }} className="forheight scroll">
          <div className="tabs fs-7 d-flex justify-content-center mb-3 position-sticky top-0 my-bg z-1">
            <div
              className={`tab-btn bg-transparent crs border-0 text-center rounded-0 px-2 px-md-3 py-2 mx-md-2 mx-0 fw-medium crs ${
                activeTab === "Completed" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Completed")}
            >
              Completed
            </div>
            <div
              className={`tab-btn bg-transparent crs border-0 text-center rounded-0 px-2 px-md-3 py-2 mx-md-2 mx-0 fw-medium crs ${
                activeTab === "Canceled" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Canceled")}
            >
              Canceled
            </div>
          </div>
          <Row className="justify-content-center px-md-5 px-3 px-lg-3 px-xl-1 mx-xl-4">
            {activeTab === "Completed" &&
              eventData.map((event) => (
                <Col
                  sm={12}
                  key={event.uuid}
                  className="px-1 py-2 px-lg-2 px-md-2 px-sm-4 p-lg-3"
                >
                  <div className="bg-white shadow-sm mb-3 rounded-4 d-flex flex-column flex-sm-row py-3 px-3 border-custom h-100">
                    <div className="img rounded-3 d-flex justify-content-center align-items-center">
                      <img
                        src={event.imageUrl}
                        alt="event"
                        style={{ width: "230px", height: "190px" }}
                        className="rounded-3"
                      />
                    </div>
                    <div className="rght w-100 ps-3 mt-3 mt-sm-0 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between flex-column flex-md-row justify-content-md-between">
                        <div className="flex-column mb-2">
                          <h6 className="mb-2 fw-bold">{event.eventName}</h6>
                          <p className="custom-color fw-normal fs-7">
                            Category:{" "}
                            <b className="text-dark fw-medium">
                              {event.category}
                            </b>
                          </p>
                        </div>
                        <div className="date mb-2 d-flex flex-column justify-content-md-start justify-content-end">
                          <div className="fs-7 fw-medium text-dark">
                            Start Date:{" "}
                            <b className="text-dark fw-medium">
                              {event.startDate}
                            </b>
                          </div>
                          <div className="fs-7 fw-medium text-dark">
                            End Date:{" "}
                            <b className="text-dark fw-medium">
                              {event.endDate}
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="custom-color fw-normal mb-2">
                          <b className="text-dark fw-medium">
                            {event.ticketPrice}
                          </b>
                        </p>
                      </div>
                      <div className="d-flex flex-column flex-sm-row justify-content-between">
                        <div className="left">
                          <p className="custom-color fw-normal fs-7">
                            Venue:{" "}
                            <b className="text-dark fw-medium">
                              {event.city}, {event.placeAddress}
                            </b>
                          </p>
                        </div>
                        <button className="bg-whole px-3 py-1 rounded-pill border-0 text-white fw-medium text-center">
                          info
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            {activeTab === "Canceled" &&
              eventData2.map((event) => (
                <Col
                  sm={12}
                  key={event.uuid}
                  className="px-1 py-2 px-lg-2 px-md-2 px-sm-4 p-lg-3"
                >
                  <div className="bg-white shadow-sm mb-3 rounded-4 d-flex flex-column flex-sm-row py-3 px-3 border-custom h-100">
                    <div className="img rounded-3 d-flex justify-content-center align-items-center">
                      <img
                        src={event.imageUrl}
                        alt="event"
                        style={{ width: "230px", height: "190px" }}
                        className="rounded-3"
                      />
                    </div>
                    <div className="rght w-100 ps-3 mt-3 mt-sm-0 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-between flex-column flex-md-row justify-content-md-between">
                        <div className="flex-column mb-2">
                          <h6 className="mb-2 fw-bold">{event.eventName}</h6>
                          <p className="custom-color fw-normal fs-7">
                            Category:{" "}
                            <b className="text-dark fw-medium">
                              {event.category}
                            </b>
                          </p>
                        </div>
                        <div className="date mb-2 d-flex flex-column justify-content-md-start justify-content-end">
                          <div className="fs-7 fw-medium text-dark">
                            Start Date:{" "}
                            <b className="text-dark fw-medium">
                              {event.startDate}
                            </b>
                          </div>
                          <div className="fs-7 fw-medium text-dark">
                            End Date:{" "}
                            <b className="text-dark fw-medium">
                              {event.endDate}
                            </b>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <p className="custom-color fw-normal mb-2">
                          <b className="text-dark fw-medium">
                            {event.ticketPrice}
                          </b>
                        </p>
                      </div>
                      <div className="d-flex flex-column flex-sm-row justify-content-between">
                        <div className="left">
                          <p className="custom-color fw-normal fs-7">
                            Venue:{" "}
                            <b className="text-dark fw-medium">
                              {event.city}, {event.placeAddress}
                            </b>
                          </p>
                        </div>
                        <div className="right d-flex flex-row flex-sm-column justify-content-between">
                          <Button
                            className="bg-danger text-white fw-medium rounded-5 border-0 mt-2 px-3 py-2 fs-7"
                            disabled={true}
                          >
                            Cancelled
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default History;
