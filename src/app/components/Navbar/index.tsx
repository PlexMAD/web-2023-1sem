import React from "react";
import { Link } from "react-router-dom";
import { PAGINATION_ROUTE, CREATE_ROUTE, MEDIAS_ROUTE, INFO_ROUTE } from "../../routes/configs";
import "./styles.css";

interface NavbarProps {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, setIsAuth }) => {
  const handleAuthToggle = () => {
    setIsAuth((prevAuth) => !prevAuth);
  };

  return (
    <nav className="navbar">
      <Link to={PAGINATION_ROUTE} className="navbar-link">
        PAGINATION_ROUTE
      </Link>
      <Link to={INFO_ROUTE} className="navbar-link">
        INFO_ROUTE
      </Link>
      <Link to={CREATE_ROUTE} className="navbar-link">
        CREATE_ROUTE
      </Link>
      <Link to={MEDIAS_ROUTE} className="navbar-link">
        MEDIAS_ROUTE
      </Link>
      <button className="auth-button" onClick={handleAuthToggle}>
        {isAuth ? "Выйти" : "Войти"}
      </button>
    </nav>
  );
};

export default Navbar;
