import React from "react";
import {
  Stack,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

import "./forms.css";

export const Overview = ({ handleStepForward }) => {
  return (
    <div className="steppers-wrapper">
      <div>
        <h3>Decided to rent a vehicle?</h3>

        <p>You can rent a vehicle, just by filling this form.</p>
        <i>
          So, what are you waiting for, hit the <b>next</b> button.
        </i>
      </div>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <div></div>
        <Button variant="outlined" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

export const UserInfo = ({ handleStepForward, handleStepBackward }) => {
  return (
    <div className="steppers-wrapper">
      <form className="basic-form">
        <h2>First, may I know your name?</h2>
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>
        <Button variant="contained" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

export const VehicleSelect = ({ handleStepForward, handleStepBackward }) => {
  return (
    <div className="steppers-wrapper">
      <FormControl>
        <h2>Choose your poison...</h2>
        <FormLabel id="demo-row-radio-buttons-group-label">
          Two or Four Wheeler
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Two wheeler"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Four wheeler"
          />
        </RadioGroup>
      </FormControl>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>
        <Button variant="contained" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

export const DatePick = ({ handleStepBackward }) => {
  return (
    <div className="steppers-wrapper">
      <form className="basic-form">
        <h2>On which date?</h2>
        <TextField type="date" fullWidth required />
      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>

        <Button variant="contained" onClick={() => handleStepBackward()}>
          Book now!
        </Button>
      </Stack>
    </div>
  );
};
