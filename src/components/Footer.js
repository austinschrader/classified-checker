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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <a href="/#">Home</a>
        <a href="/#">The Administration</a>
        <a href="/#">Executive Offices</a>
        <a href="/#">Priorities</a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <a href="/#">Briefing Room</a>
        <a href="/#">The White House</a>
        <a href="/#">Get Involved</a>
        <a href="/#">Español</a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <a href="/#">Contact Us</a>
        <a href="/#">Privacy Policy</a>
        <a href="/#">Copyright Policy</a>
        <a href="/#">Accessibility Statements</a>
        <a href="/#">Disclosures</a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <span style={{ fontWeight: "bold" }}>The White House</span>
        <span>1600 Pennsylvania Ave NW</span>
        <span>Washington, DC 20500</span>
      </div>
    </div>
  );
};

export default Footer;
