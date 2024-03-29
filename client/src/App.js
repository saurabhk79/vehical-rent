import React, { useState } from "react";

import { keys } from "./config";
import "./App.css";
import {
  Overview,
  DatePick,
  UserInfo,
  VehicleSelect,
} from "./components/Forms";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    vehicleName: "",
    vehicleWheels: 0,
    vehicleType: "",
    startDate: "",
    endDate: "",
  });

  const handleFormSubmission = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleStepForward = () => {
    setStep(step + 1);
  };

  const handleStepBackward = () => {
    setStep(step - 1);
  };

  const handleCreateUserBooking = async () => {
    console.log(formData);

    await fetch(keys.url + "/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Successful!")
  };

  const renderForm = () => {
    switch (step) {
      case 1:
        return <Overview handleStepForward={handleStepForward} />;

      case 2:
        return (
          <UserInfo
            handleStepForward={handleStepForward}
            handleStepBackward={handleStepBackward}
            handleFormSubmission={handleFormSubmission}
          />
        );

      case 3:
        return (
          <VehicleSelect
            handleStepForward={handleStepForward}
            handleStepBackward={handleStepBackward}
            handleFormSubmission={handleFormSubmission}
          />
        );

      case 4:
        return (
          <DatePick
            handleStepBackward={handleStepBackward}
            handleFormSubmission={handleFormSubmission}
            handleCreateUserBooking={handleCreateUserBooking}
          />
        );

      default:
        return <></>;
    }
  };

  return (
    <div className="App">
      <div className="card">
        <h1>Rent a Vehical...</h1>
        <div>{renderForm()}</div>
      </div>
    </div>
  );
}

export default App;
