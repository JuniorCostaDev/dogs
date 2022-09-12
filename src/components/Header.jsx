import "./Header.scss";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data } = useContext(UserContext);
  return (
    <div className="Header">
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="conta" to="/conta">
            {data.nome}
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
