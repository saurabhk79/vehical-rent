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

export const Overview = ({ handleStepForward }) => {
  return (
    <>
      <h3>Decided to rent a vehicle?</h3>

      <p>You can rent a vehicle, just by filling this form.</p>
      <i>
        So, what are you waiting for, hit the <b>next</b> button.
      </i>

      <Stack direction={"row"} justifyContent={"space-between"}>
        <div></div>
        <Button variant="outlined" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </>
  );
};

export const UserInfo = ({ handleStepForward, handleStepBackward }) => {
  return (
    <>
      <h2>First, may I know your name?</h2>
      <form className="basic-form">
        <TextField
          id="outlined-basic"
          label="First name"
          variant="outlined"
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          variant="outlined"
          fullWidth
        />

      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>
        <Button variant="outlined" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </>
  );
};

export const VehicleSelect = ({ handleStepForward, handleStepBackward }) => {
  return (
    <>
      <h2>Choose your poison...</h2>
      <FormControl>
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
        <Button variant="outlined" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </>
  );
};

export const DatePick = ({ handleStepBackward }) => {
  return (
    <>
      <h2>On which date?</h2>
      <form className="basic-form">
        <input type="date" />

      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>

        <Button variant="contained" onClick={() => handleStepBackward()}>
          Book now!
        </Button>
      </Stack>
    </>
  );
};
