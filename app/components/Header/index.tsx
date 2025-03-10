import React from "react";
import styles from "./style.module.css";
import profileImage from "@assets/images/profile.png";
import { Link } from "react-router";

const Header: React.FC = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </Link>
    </header>
  );
};

export default Header;
