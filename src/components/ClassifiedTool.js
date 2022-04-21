import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ClassifiedAutocomplete from "./ClassifiedAutocomplete";
import Title from "./Title";

const ClassifiedTool = () => {
  return (
    <React.Fragment>
      <Title>New Scan</Title>
      <TextField
        sx={{ m: 2, width: "25ch" }}
        InputProps={{
          endAdornment: (
            <Button
              variant="contained"
              color="primary"
              startIcon={<i className="fas fa-search" />}
            >
              Scan
            </Button>
          ),
        }}
        label="Email to Scan"
        style={{ width: 900 }}
      />
      <ClassifiedAutocomplete />
    </React.Fragment>
  );
};

export default ClassifiedTool;
