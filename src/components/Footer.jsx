import React from "react";
import "./Footer.scss";
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg';
const Footer = () => {
  return (
    <footer className="Footer">
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
