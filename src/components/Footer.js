import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "20px",
        listStyle: "none",
      }}
    >
      <div className="footer-column">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <a href="/#">
            <li>Home</li>
          </a>
          <a href="/#">
            <li>The Administration</li>
          </a>
          <a href="/#">
            <li>Executive Offices</li>
          </a>
          <a href="/#">
            <li>Priorities</li>
          </a>
        </ul>
      </div>
      <div className="footer-column">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <a href="/#">
            <li>Briefing Room</li>
          </a>
          <a href="/#">
            <li>The White House</li>
          </a>
          <a href="/#">
            <li>Get Involved</li>
          </a>
          <a href="/#">
            <li>Español</li>
          </a>
        </ul>
      </div>
      <div className="footer-column">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <a href="/#">
            <li>Contact Us</li>
          </a>
          <a href="/#">
            <li>Privacy Policy</li>
          </a>
          <a href="/#">
            <li>Copyright Policy</li>
          </a>
          <a href="/#">
            <li>Accessibility Statements</li>
          </a>
          <a href="/#">
            <li>Disclosures</li>
          </a>
        </ul>
      </div>

      <div className="footer-column">
        <p style={{ fontWeight: "bold" }}>The White House</p>
        <p>1600 Pennsylvania Ave NW</p>
        <p>Washington, DC 20500</p>
      </div>
    </div>
  );
};

export default Footer;
