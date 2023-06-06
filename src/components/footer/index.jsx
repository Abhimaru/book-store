import React from "react";
import { footerStyle } from "./style";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <p className="copyright-text">
                Copyright@2023 All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
