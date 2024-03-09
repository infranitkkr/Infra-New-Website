import EventRegistrationForm from "./event_registration";
import { useParams } from "react-router-dom";

const EventRegistration = () => {
  const { eventId, eventName } = useParams();

  return (
    <div>
      {/* Shivam */}
      <EventRegistrationForm eventId={eventId} eventName={eventName} />
    </div>
  );
};

export default EventRegistration;
