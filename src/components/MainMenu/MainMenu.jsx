import { useState } from "react";

import {
  searchIcon,
  homeIcon,
  tvIcon,
  movieIcon,
  genreIcon,
  watchLaterIcon,
  profileImage,
} from "../../assets";
import { MainMenuItem } from "../MainMenuItem/MainMenuItem";

import styles from "./MainMenu.module.css";

const menuItems = [
  { src: searchIcon, name: "Search", alt: "Search" },
  { src: homeIcon, name: "Home", alt: "Home" },
  { src: tvIcon, name: "TV Shows", alt: "TV Shows" },
  { src: movieIcon, name: "Movies", alt: "Movies" },
  { src: genreIcon, name: "Genres", alt: "Genres" },
  { src: watchLaterIcon, name: "Watch Later", alt: "Watch Later" },
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
        <img src={profileImage} alt="Profile" className={styles.profilePic} />
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
