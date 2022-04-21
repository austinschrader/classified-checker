import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Title from "./Title";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const filter = createFilterOptions();

const ClassifiedTool = () => {
  const handleSubmit = () => console.log(selectedOptions);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, value) => setSelectedOptions(value);

  return (
    <React.Fragment>
      <Title>New Scan</Title>
      <TextField
        sx={{ m: 2, width: "25ch" }}
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
        label="Email to Scan"
        style={{ width: "90%" }}
      />
      <Autocomplete
        multiple
        freeSolo
        style={{ width: "90%", marginLeft: "15px" }}
        size="small"
        id="classified-words-list"
        onChange={handleChange}
        options={classifiedWordsList}
        defaultValue={[
          classifiedWordsList[4],
          classifiedWordsList[10],
          classifiedWordsList[15],
          classifiedWordsList[20],
          classifiedWordsList[25],
          classifiedWordsList[33],
          classifiedWordsList[22],
          classifiedWordsList[29],
        ]}
        disableCloseOnSelect
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.word) {
            return option.word;
          }
          return option.word;
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              word: params.inputValue,
            });
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
            {option.word}
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
    </React.Fragment>
  );
};

export default ClassifiedTool;

const classifiedWordsList = [
  { word: "Abu Omar case" },
  { word: "Acoustic Kitty" },
  { word: "Air Bridge Denial Program" },
  { word: "MS Alfhem" },
  { word: "American Committee on United Europe" },
  { word: "SS Aquila (1940)" },
  { word: "SS Armonia (1924)" },
  { word: "Project ARTICHOKE" },
  { word: "Assassination attempts on Fidel Castro" },
  { word: "Battalion 3-16 (Honduras)" },
  { word: "Bay of Pigs Invasion" },
  { word: "William H. Beale" },
  { word: "Darrell Blocker" },
  { word: "Canadian Caper" },
  { word: "Operation CHAOS" },
  { word: "1973 Chilean coup d'état" },
  { word: "Church Committee" },
  { word: "CIA black sites" },
  { word: "Allegations of CIA drug trafficking" },
  { word: "CIA Tibetan program" },
  { word: "International counter-terroism activities of the CIA" },
  { word: "Project COLDFEET" },
  { word: "Contras" },
  { word: "Operation Easy Chair" },
  { word: "MV Daronia" },
  { word: "Disposition Matrix" },
  { word: "Edgewood Arsenal human experiments" },
  { word: "Executive actions of the CIA" },
  { word: "Extraordinary rendition" },
  { word: "Extraordinary repatriation" },
  { word: "Farewell Dossier" },
  { word: "SS Flying Lark" },
  { word: "Project FUBELT" },
  { word: "Operation Gold" },
  { word: "Greystone (CIA operation)" },
  { word: "Habbush letter" },
  { word: "HTLINGUAL" },
  { word: "Human Ecology Fund" },
  { word: "1953 Iranian coup d'état" },
  { word: "1989 Angola Lockheed L-100 crash" },
  { word: "Project Azorian" },
  { word: "JMWAVE" },
  { word: "Joint Advisory Commission, Korea" },
  { word: "J. C. King" },
  { word: "Battle of Luang Namtha" },
  { word: "Khalid El-Masri" },
  { word: "Measurements of Earth Data for Environmental Analysis" },
  { word: "Operation Merlin" },
  { word: "Project MERRIMAC" },
];
