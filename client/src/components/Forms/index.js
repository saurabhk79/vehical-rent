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

export const VehicleSelect = ({
  handleStepForward,
  handleStepBackward,
  handleFormSubmission,
}) => {
  const [vehicleData, setVehicleData] = useState({
    vehicleWheels: 0,
    vehicleName: "",
    vehicleType: "",
    isSubmitted: false,
  });

  const [vehiclesType, setVehiclesType] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  const fetchVehiclesType = async (wheels) => {
    const res = await fetch(
      `http://localhost:9872/vehicletype?wheels=${wheels}`
    );
    const data = await res.json();

    setVehiclesType(data);
  };

  const fetchVehicles = async (type) => {
    const res = await fetch(`http://localhost:9872/vehicles?type=${type}`);
    const data = await res.json();

    setVehicles(data);
  };

  const handleWheels = (e) => {
    setVehicleData({ ...vehicleData, vehicleWheels: e.target.value });

    fetchVehiclesType(e.target.value);
  };

  const handleType = (e) => {
    setVehicleData({
      ...vehicleData,
      vehicleType: e.target.value,
    });

    fetchVehicles(e.target.value);
  };

  const handleSubmit = (e) => {
    setVehicleData({
      ...vehicleData,
      vehicleName: e.target.value,
    });

    setVehicleData({ ...vehicleData, isSubmitted: true });

    const { vehicleName, vehicleType, vehicleWheels } = vehicleData;
    handleFormSubmission({ vehicleName, vehicleType, vehicleWheels });
  };

  return (
    <div className="steppers-wrapper">
      <FormControl>
        <h2>Choose your vehicle...</h2>
        <FormLabel id="vehicle-wheels">Two or Four Wheeler</FormLabel>
        <RadioGroup
          row
          aria-labelledby="vehicle-wheels"
          name="row-radio-buttons-group"
          value={vehicleData.vehicleWheels}
          onChange={handleWheels}
        >
          <FormControlLabel value={2} control={<Radio />} label="Two wheeler" />
          <FormControlLabel
            value={4}
            control={<Radio />}
            label="Four wheeler"
          />
        </RadioGroup>

        {vehicleData.vehicleWheels !== 0 ? (
          <>
            <FormLabel id="vehicle-wheels">Vehicle Type</FormLabel>
            <RadioGroup
              row
              aria-labelledby="vehicle-wheels"
              name="row-radio-buttons-group"
              value={vehicleData.vehicleType}
              onChange={handleType}
            >
              {vehiclesType.map((type, idx) => {
                return (
                  <FormControlLabel
                    value={type}
                    control={<Radio />}
                    label={type}
                    key={idx}
                  />
                );
              })}
            </RadioGroup>
          </>
        ) : null}

        {vehicleData.vehicleType.length !== 0 ? (
          <>
            <FormLabel id="vehicle-wheels">Vehicle</FormLabel>
            <RadioGroup
              row
              aria-labelledby="vehicle-wheels"
              name="row-radio-buttons-group"
              value={vehicleData.vehicleName}
              onChange={(e) =>
                setVehicleData({ ...vehicleData, vehicleName: e.target.value })
              }
            >
              {vehicles.map((veh) => {
                return (
                  <FormControlLabel
                    value={veh.vehicleName}
                    control={<Radio />}
                    label={veh.vehicleName}
                    key={veh.id}
                  />
                );
              })}
            </RadioGroup>
          </>
        ) : null}
      </FormControl>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button variant="outlined" onClick={() => handleStepBackward()}>
          Back
        </Button>
        {vehicleData.isSubmitted ? (
          <Button variant="contained" onClick={() => handleStepForward()}>
            Next
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={
              !vehicleData.vehicleWheels ||
              !vehicleData.vehicleType ||
              !vehicleData.vehicleName
            }
          >
            Submit
          </Button>
        )}
      </Stack>
    </div>
  );
};

export const DatePick = ({ handleStepBackward, handleFormSubmission, handleCreateUserBooking }) => {
  const [rentDate, setRentDate] = useState({
    startDate: "",
    endDate: "",
  });

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = () => {
    const { startDate, endDate } = rentDate;

    handleFormSubmission({ startDate, endDate });

    handleCreateUserBooking();

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
