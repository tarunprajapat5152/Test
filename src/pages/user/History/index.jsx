import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useEventData from "../UseEventData";
import EventCard from "../EventCart";
import { Loader }from "../../../components/Loader/index";
// import './index.css';

export const History = () => {
  const { filteredEvents: events, isLoading } = useEventData("history");

  return (
    <div className="overflow-hidden">
      <div className="container-fluid px-0 text-center heading-background py-5 mb-3">
        {/* <h1 className="text-white pt-5 fw-bold">History Events</h1> */}
      </div>
      <Container className="px-0 mt-3">
        {isLoading ? (
          <Loader />
        ) : events.length > 0 ? (
          <Row className="justify-content-center px-md-5 px-lg-2 px-xl-1 mx-xl-4">
            {events.map((event) => (
              <Col
                xl={3}
                lg={4}
                md={6}
                sm={12}
                key={event.eventUuid}
                className="d-flex justify-content-center py-2 px-3 px-md-2"
              >
                <EventCard event={event} showCancelButton={false} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="d-flex flex-column col-12 justify-content-center align-items-center">
            <h1 className="text-color m-5">No history events.</h1>
          </div>
        )}
      </Container>
    </div>
  );
};

export default History;
