import React from "react";
import { TextField } from "@mui/material";

export const Overview = () => {
  return (
    <>
      <h3>Decided to rent a vehicle?</h3>

      <p>You can rent a vehicle, just by filling this form.</p>
      <i>
        So, what are you waiting for, hit the <b>next</b> button.
      </i>
    </>
  );
};

export const UserInfo = () => {
    return(
        <form>
                  <TextField id="outlined-basic" label="First name" variant="outlined" />
                  <TextField id="outlined-basic" label="Last name" variant="outlined" />

        </form>
    )
};

export const VehicleSelect = () => {};

export const DatePick = () => {};
