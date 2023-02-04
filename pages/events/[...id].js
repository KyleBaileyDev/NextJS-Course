import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";
import { getFilteredEvents } from "../../dummy-data";

function EventQueryPage() {
  const router = useRouter();

  const filter = router.query.id;

  if (!filter) {
    return <p className="center">Loading...</p>;
  }

  // Adding + to a string converts to an int
  const data = getFilteredEvents({ year: +filter[0], month: +filter[1] });

  if (
    isNaN(filter[0]) ||
    isNaN(filter[1]) ||
    +filter[0] > 2030 ||
    +filter[1] < 1 ||
    +filter[1] > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>Invalid Filters</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>No events found for the chosen filter.</ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <ResultsTitle date={new Date(filter[0], filter[1] - 1)} />
      <EventList items={data} />
    </Fragment>
  );
}

export default EventQueryPage;
