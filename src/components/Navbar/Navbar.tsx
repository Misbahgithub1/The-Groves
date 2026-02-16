import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import TopBar2 from "./TopBar";

type NavKey = "dine" | "visit" | "events" | "map" | "story" | "contact";

const Navbar2: React.FC = () => {
  const [activeItem, setActiveItem] = useState<NavKey>("dine");

  const navItems: { key: NavKey; label: string; href: string }[] = [
    { key: "dine", label: "Dine With Us", href: "#dine" },
    { key: "visit", label: "Plan Your Visit", href: "#visit" },
    { key: "events", label: "Events", href: "#events" },
    { key: "map", label: "View Groves Map", href: "#map" },
    { key: "story", label: "Our Story", href: "#story" },
    { key: "contact", label: "Contact Us", href: "#contact" },
  ];

  return (
    <div className={styles.navbar}>
      <TopBar2 />
       <div className={`${styles.customBorder}`}>
      <nav className={`${styles.navSection} container`}>
       
          <div className="row">
            <div className="col-12">
              <ul className={`${styles.navList}`}>
                {navItems.map((item) => (
                  <li className="nav-item" key={item.key}>
                    <a
                      href={item.href}
                      className={`nav-link ${styles.navLink} ${
                        activeItem === item.key ? styles.navLinkActive : ""
                      }`}
                      aria-current={
                        activeItem === item.key ? "page" : undefined
                      }
                      onClick={() => setActiveItem(item.key)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
       
      </nav>
      </div>
    </div>
  );
};

export default Navbar2;
