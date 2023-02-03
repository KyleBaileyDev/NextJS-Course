import EventListItem from "./event-item";
import styles from "./event-list.module.css";

function EventList(props) {
  return (
    <ul className={styles.list}>
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
