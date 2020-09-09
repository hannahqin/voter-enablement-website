/* eslint-disable no-use-before-define */
import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles, withTheme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import stateInfo from "./StateInfo.json";
import StateInformation from './StateInformation';

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
    },
    "& label": {
      color: "white",
    },
    "& label::focus": {
      color: "white !important",
    },
  },
})(TextField);

export default function StateSelection() {
  const classes = useStyles();
  const [stateValue, setStateValue] = useState(stateInfo[0])
  const [inputValue, setInputValue] = React.useState('');

  return (
    <React.Fragment>
    <Grid container item xs={12} md={12} lg={6} xl={6} style={{maxHeight: "30vh"}}>
      <Grid item style={{ width: "100%" }}>
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
      { stateValue ? <StateInformation selectedState={stateValue}/> : null}
    </Grid>
  </React.Fragment>
  );
}
