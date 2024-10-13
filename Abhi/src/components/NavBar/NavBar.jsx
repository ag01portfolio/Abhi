import  { useState } from "react";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu} id="m">
        {/* <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> */}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#m1">About</a>
          </li>
          <li>
            <a href="#m2">Experience</a>
          </li>
          <li>
            <a href="#m3">Projects</a>
          </li>
          <li>
            <a href="#m4">Contact</a>
          </li>
        </ul>
      </div>
    </nav>


</div>
  );
};
