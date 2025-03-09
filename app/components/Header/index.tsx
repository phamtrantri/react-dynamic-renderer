import React from "react";
import styles from "./style.module.css";
import profileImage from "@assets/images/profile.png";
import { Link } from "react-router";

interface IProps {
  onExport?: () => void;
}

const Header: React.FC<IProps> = () => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </Link>
    </header>
  );
};

export default Header;
