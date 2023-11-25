import Link from "next/link";
import styles from "./Layouts.module.css";

const Layouts = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="">
          <h2>lets gooooo</h2>
          <p>choose and buy your car</p>
        </Link>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        <a href="" target="_blank">
          best cars in te world
        </a>
        next.js courses | lets go &copy;
      </footer>
    </>
  );
};
export default Layouts;
