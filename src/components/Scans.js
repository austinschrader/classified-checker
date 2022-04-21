import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, sentTo, classifiedDetected, reports) {
  return { id, date, name, sentTo, classifiedDetected, reports };
}

const rows = [
  createData(
    0,
    "21 Apr, 2022",
    "Dana A. Remus",
    "robertredfield@cdc.gov",
    "CLASSIFIED DETECTED",
    "VIEW REPORT"
  ),
  createData(
    1,
    "21 Apr, 2022",
    "Jennifer R. Psaki",
    "rochellewalensky@cdc.gov",
    "CLEAR",
    "VIEW REPORT"
  ),
  createData(
    2,
    "21 Mar, 2022",
    "Ronald A. Klain",
    "vpharris@whitehouse.gov",
    "CLEAR",
    "VIEW REPORT"
  ),
  createData(
    3,
    "21 Mar, 2022",
    "Jacob J. Sullivan",
    "generalvickers@goarmy.gov",
    "CLEAR",
    "VIEW REPORT"
  ),
  createData(
    4,
    "21 Mar, 2022",
    "Vidur Sharma",
    "mirandapriestly@nato.com",
    "CLASSIFIED DETECTED",
    "VIEW REPORT"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Scans() {
  return (
    <React.Fragment>
      <Title>Recent Scans</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sent To</TableCell>
            <TableCell>Classified Detected</TableCell>
            <TableCell align="right">Reports</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sentTo}</TableCell>
              <TableCell>{row.classifiedDetected}</TableCell>
              <TableCell align="right">
                <Link
                  color="primary"
                  href="#"
                  onClick={preventDefault}
                  sx={{ mt: 3 }}
                >
                  {row.reports}
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more reports
      </Link>
    </React.Fragment>
  );
}
