import React, { useState } from "react";

import "./App.css";
import {
  Overview,
  DatePick,
  UserInfo,
  VehicleSelect,
} from "./components/Forms";

function App() {
  const [step, setStep] = useState(1);

  const handleStepForward = () => {
    setStep(step + 1);
  };

  const handleStepBackward = () => {
    setStep(step - 1);
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
          />
        );

      case 3:
        return (
          <VehicleSelect
            handleStepForward={handleStepForward}
            handleStepBackward={handleStepBackward}
          />
        );

      case 4:
        return <DatePick handleStepBackward={handleStepBackward} />;

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
