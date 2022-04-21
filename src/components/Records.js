import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Records() {
  return (
    <React.Fragment>
      <Title>Words Detected</Title>
      <Typography component="p" variant="h4">
        325
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 21 April, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View records
        </Link>
      </div>
    </React.Fragment>
  );
}
