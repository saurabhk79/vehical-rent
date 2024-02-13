import React from "react";
import { Stack, TextField, Button } from "@mui/material";

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

export const UserInfo = ({ handleStep }) => {
  return (
    <>
      <form>
        <TextField id="outlined-basic" label="First name" variant="outlined" />
        <TextField id="outlined-basic" label="Last name" variant="outlined" />
      </form>
    </>
  );
};

export const VehicleSelect = ({ handleStep }) => {};

export const DatePick = ({ handleStep }) => {};
