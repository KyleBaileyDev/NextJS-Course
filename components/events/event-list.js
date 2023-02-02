import EventListItem from "./event-item";

function EventList(props) {
  return (
    <ul>
      {props.items.map((x) => (
        <EventListItem
          key={x.id}
          id={x.id}
          title={x.title}
          location={x.location}
          date={x.date}
          image={x.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
