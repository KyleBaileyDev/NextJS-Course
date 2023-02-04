import Link from "next/link";
import styles from "./button.module.css";

function Button(props) {
  if (!props.link) {
    return (
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }

  // a tag is mandatory for Next v-12 or less
  return (
    <Link href={props.link}>
      <a className={styles.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
