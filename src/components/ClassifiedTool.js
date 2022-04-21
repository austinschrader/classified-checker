import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Title from "./Title";
import Typography from "@mui/material/Typography";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const filter = createFilterOptions();

const ClassifiedTool = () => {
  const [selectedOptions, setSelectedOptions] = useState(defaultWords);
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState(false);

  const handleAutocompleteChange = (event, value) => setSelectedOptions(value);
  const handleEmailChange = (event) => setEmailText(event.target.value);
  const handleSubmit = () =>
    setResult(isClassified(emailText, selectedOptions));

  return (
    <React.Fragment>
      <Title>New Scan</Title>
      <TextField
        sx={{ m: 2, width: "25ch" }}
        onChange={handleEmailChange}
        InputProps={{
          endAdornment: (
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              startIcon={<i className="fas fa-search" />}
            >
              Scan
            </Button>
          ),
        }}
        label="Email Text to Scan"
        style={{ width: "96%" }}
      />
      <Autocomplete
        multiple
        freeSolo
        style={{ width: "96%", marginLeft: "15px" }}
        size="small"
        id="classified-words-list"
        onChange={handleAutocompleteChange}
        options={classifiedWordsList}
        defaultValue={defaultWords}
        disableCloseOnSelect
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option) {
            return option;
          }
          return option;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push(params.inputValue);
          }

          return filtered;
        }}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </li>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Classified Words"
            placeholder="More classified words..."
          />
        )}
      />
      {result[1] && (
        <div style={{ marginTop: "10px" }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Checked Email Text: {result[1]}
          </Typography>

          <Typography variant="subtitle1" color="primary" gutterBottom>
            Classified Words: {result[0] ? "Yes" : "No"}
          </Typography>
        </div>
      )}
    </React.Fragment>
  );
};

export default ClassifiedTool;

// TODO: move this logic to the backend
const isClassified = (emailText, selectedOptions) => {
  // if the email is empty, then return false
  if (emailText === "") {
    return [false, emailText];
  }

  // if the selectedOptions is empty, then return false
  if (selectedOptions.length === 0) {
    return [false, emailText];
  }

  // if the email contains any of the selectedOptions, then return true as well as the email with the classified words replaced with asterisks
  for (let i = 0; i < selectedOptions.length; i++) {
    if (emailText.includes(selectedOptions[i])) {
      // TODO: optimize this function if we're processing a large amount of emails
      return [
        true,
        emailText.replace(
          selectedOptions[i],
          "*".repeat(selectedOptions[i].length)
        ),
      ];
    }
  }

  // if the email doesn't contain any of the selectedOptions, then return false
  return [false, emailText];
};

// TODO: move this to a database; generate alternative words based on these words
const classifiedWordsList = [
  "Abu Omar case",
  "Acoustic Kitty",
  "Air Bridge Denial Program",
  "MS Alfhem",
  "American Committee on United Europe",
  "SS Aquila (1940)",
  "SS Armonia (1924)",
  "Project ARTICHOKE",
  "Assassination attempts on Fidel Castro",
  "Battalion 3-16 (Honduras)",
  "Bay of Pigs Invasion",
  "William H. Beale",
  "Darrell Blocker",
  "Canadian Caper",
  "Operation CHAOS",
  "1973 Chilean coup d'état",
  "Church Committee",
  "CIA black sites",
  "Allegations of CIA drug trafficking",
  "CIA Tibetan program",
  "International counter-terroism activities of the CIA",
  "Project COLDFEET",
  "Contras",
  "Operation Easy Chair",
  "MV Daronia",
  "Disposition Matrix",
  "Edgewood Arsenal human experiments",
  "Executive actions of the CIA",
  "Extraordinary rendition",
  "Extraordinary repatriation",
  "Farewell Dossier",
  "SS Flying Lark",
  "Project FUBELT",
  "Operation Gold",
  "Greystone (CIA operation)",
  "Habbush letter",
  "HTLINGUAL",
  "Human Ecology Fund",
  "1953 Iranian coup d'état",
  "1989 Angola Lockheed L-100 crash",
  "Project Azorian",
  "JMWAVE",
  "Joint Advisory Commission, Korea",
  "J. C. King",
  "Battle of Luang Namtha",
  "Khalid El-Masri",
  "Measurements of Earth Data for Environmental Analysis",
  "Operation Merlin",
  "Project MERRIMAC",
];

const defaultWords = [
  classifiedWordsList[4],
  classifiedWordsList[10],
  classifiedWordsList[15],
  classifiedWordsList[20],
  classifiedWordsList[25],
  classifiedWordsList[33],
  classifiedWordsList[22],
  classifiedWordsList[29],
];
