import { Fragment } from "react";
import EventSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import EventList from "..//../components/events/event-list";
import { useRouter } from "next/router";

function EventsPage() {
  const allEvents = getAllEvents();
  const router = useRouter();

  const onSearchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <Fragment>
      <EventSearch onSearch={onSearchHandler} />
      <EventList items={allEvents} />
    </Fragment>
  );
}

export default EventsPage;
