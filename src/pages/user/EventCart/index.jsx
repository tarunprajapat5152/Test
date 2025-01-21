import React from 'react';
import { Card } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';

const EventCard = ({ event, handleAddToCart, handleBuyNow, formatDateToLocal }) => {
  return (
    <Card className="w-100 mb-3 border shadow-sm">
      <Card.Img className="card-img-h" variant="top" src={event.imageUrl} />
      <Card.Body className="pb-0 pt-2 px-2 h-25">
        <Card.Title className="text-color fw-bold fs-5">{event.eventName}</Card.Title>
        <div className="text-muted d-flex flex-column gap-1">
          <div className="text-wrap-custom">{event.eventDetails}</div>
          <div className="text-wrap-custom">
            <FaMapMarkerAlt className="me-1" />
            {event.placeAddress}, {event.city}
          </div>
          <div className="d-flex justify-content-between px-2">
            <span>
              <MdDateRange className="me-1" />
              Start date: <br />
              {formatDateToLocal(event.startDate)}
            </span>
            <span>
              <MdDateRange className="me-1" />
              End date: <br />
              {formatDateToLocal(event.endDate)}
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <div>Ticket price - {event.ticketPrice}</div>
          </div>
          <div className="d-flex gap-2">
            <button
              className='border-whole bg-transparent btn-sm fw-medium p-2 rounded my-2 d-flex align-items-center'
              onclick="{()=> handleAddToCart(event)}"
            >
              Add to Cart
            </button>

            <button
              className="bg-whole border-0 text-white btn-sm fw-medium p-2 rounded my-2"
              onclick="{()=> handleBuyNow(event)}"
            >
              Buy Now
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;