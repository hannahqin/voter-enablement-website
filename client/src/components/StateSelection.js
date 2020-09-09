/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, withTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import stateInfo from "./StateInfo.json";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
}));

const StateTextField = withStyles({
  root: {
    "& input + fieldset": {
      borderColor: "white",
      borderWidth: 2,
      borderLeft: 0,
      borderRight: 0,
      borderBottom: 0,
    },
    "& input": {
      color: "white",
      fontSize: "5em",
    },
    "& label": {
      color: "white",
      fontSize: "2em",
    },
    "& label::focus": {
      color: "white !important",
      fontSize: "1.5em",
    },
  },
})(TextField);

export default function StateSelection() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Grid container xs={5} md={5} lg={5}>
      <Grid item style={{ marginTop: "5vh", width: "100%" }}>
        <Autocomplete
          id="state-select"
          options={stateInfo}
          getOptionLabel={(option) => option.state}
          style={{ width: "100%" }}
          renderInput={(params) => (
            <StateTextField
              {...params}
              label="Select a State"
              variant="outlined"
            />
          )}
        />
      </Grid>
    </Grid>
  </React.Fragment>
  );
}
