import React from "react";
import { Facebook, GitHub, Twitter } from "@material-ui/icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="info">
        Copyright &copy; 2020 <h4>Developer: Yusuf Oyebanji</h4>
      </div>
      <div className="sm">
        <h4>Connect With Me</h4>
        <Facebook />
        <Twitter />
        <GitHub />
      </div>
    </footer>
  );
}

export default Footer;
