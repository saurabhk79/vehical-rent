import React, { useState } from "react";
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
        <Button variant="contained" onClick={() => handleStepForward()}>
          Next
        </Button>
      </Stack>
    </div>
  );
};

export const UserInfo = ({
  handleStepForward,
  handleStepBackward,
  handleFormSubmission,
}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    isSubmitted: false,
  });

  const handleSubmit = () => {
    const { firstname, lastname } = formData;

    setFormData({ ...formData, isSubmitted: true });

    handleFormSubmission({ firstname, lastname });
  };

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
          value={formData.firstname}
          onChange={(e) =>
            setFormData({ ...formData, firstname: e.target.value })
          }
        />
        <TextField
          id="outlined-basic"
          label="Last name"
          margin="normal"
          variant="outlined"
          fullWidth
          value={formData.lastname}
          onChange={(e) =>
            setFormData({ ...formData, lastname: e.target.value })
          }
        />
      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>
        {formData.isSubmitted ? (
          <Button variant="contained" onClick={() => handleStepForward()}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!formData.firstname || !formData.lastname}
          >
            Submit
          </Button>
        )}
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

export const DatePick = ({ handleStepBackward, handleFormSubmission }) => {
  const [rentDate, setRentDate] = useState({
    startDate: "",
    endDate: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    const { startDate, endDate } = rentDate;

    handleFormSubmission({ startDate, endDate });

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleStartDateChange = (e) => {
    const selectedStartDate = e.target.value;
    const selectedEndDate = rentDate.endDate;

    if (selectedStartDate >= today) {
      setRentDate({ ...rentDate, startDate: selectedStartDate });

      if (selectedEndDate && selectedStartDate > selectedEndDate) {
        setRentDate({ ...rentDate, endDate: "" });
      }
    }
  };

  const handleEndDateChange = (e) => {
    const selectedEndDate = e.target.value;

    if (selectedEndDate >= today && selectedEndDate >= rentDate.startDate) {
      setRentDate({ ...rentDate, endDate: selectedEndDate });
    }
  };

  return (
    <div className="steppers-wrapper">
      <form className="basic-form">
        <h2>On which date?</h2>
        <TextField
          type="date"
          label="Start date"
          fullWidth
          required
          margin="normal"
          value={rentDate.startDate}
          min={today}
          focused
          onChange={handleStartDateChange}
        />
        {rentDate.startDate ? (
          <TextField
            type="date"
            label="End date"
            fullWidth
            required
            margin="normal"
            value={rentDate.endDate}
            min={rentDate.startDate || today}
            focused
            onChange={handleEndDateChange}
          />
        ) : (
          <></>
        )}
      </form>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!rentDate.startDate || !rentDate.endDate}
        >
          Book now!
        </Button>
      </Stack>
    </div>
  );
};
