import { useState } from "react";

import { MainMenuItem } from "../MainMenuItem/MainMenuItem";

import styles from "./MainMenu.module.css";

const menuItems = [
  { src: "/assets/icons/search-icon.png", name: "Search", alt: "Search" },
  { src: "/assets/icons/home-icon.png", name: "Home", alt: "Home" },
  { src: "/assets/icons/tv-icon.png", name: "TV Shows", alt: "TV Shows" },
  { src: "/assets/icons/movie-icon.png", name: "Movies", alt: "Movies" },
  { src: "/assets/icons/genre-icon.png", name: "Genres", alt: "Genres" },
  {
    src: "/assets/icons/watch-later-icon.png",
    name: "Watch Later",
    alt: "Watch Later",
  },
];

export const MainMenu = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav
      className={styles.mainMenu}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={styles.profileInfo}>
        <img
          src="/assets/images/profile.png"
          alt="Profile"
          className={styles.profilePic}
        />
        <p className={styles.profileName}>Daniel</p>
      </div>
      <ul className={styles.menuList}>
        {menuItems.map((item) => (
          <MainMenuItem
            key={item.name}
            src={item.src}
            alt={item.alt}
            name={item.name}
            isExpanded={isExpanded}
          />
        ))}
      </ul>
      <div className={styles.bottomMenu}>
        <p>Language</p>
        <p>Get Help</p>
        <p>Exit</p>
      </div>
    </nav>
  );
};
