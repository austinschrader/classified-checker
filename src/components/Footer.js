import React from "react";
import { styled } from "@mui/material/styles";

const Column = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
});

const FooterContainer = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "20px",
  listStyle: "none",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <a href="/#">Home</a>
        <a href="/#">The Administration</a>
        <a href="/#">Executive Offices</a>
        <a href="/#">Priorities</a>
      </Column>
      <Column>
        <a href="/#">Briefing Room</a>
        <a href="/#">The White House</a>
        <a href="/#">Get Involved</a>
        <a href="/#">Español</a>
      </Column>
      <Column>
        <a href="/#">Contact Us</a>
        <a href="/#">Privacy Policy</a>
        <a href="/#">Copyright Policy</a>
        <a href="/#">Accessibility Statements</a>
        <a href="/#">Disclosures</a>
      </Column>
      <Column>
        <span style={{ fontWeight: "bold" }}>The White House</span>
        <span>1600 Pennsylvania Ave NW</span>
        <span>Washington, DC 20500</span>
      </Column>
    </FooterContainer>
  );
};

export default Footer;
