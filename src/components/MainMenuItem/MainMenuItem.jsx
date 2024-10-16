import styles from "./MainMenuItem.module.css";

export const MainMenuItem = ({ src, alt, name, isExpanded }) => (
  <li className={`${styles.menuItem} ${isExpanded ? styles.expanded : ""}`}>
    <img src={src} alt={alt} className={styles.icon} />
    <span className={`${styles.itemName} ${isExpanded ? styles.visible : ""}`}>
      {name}
    </span>
  </li>
);
