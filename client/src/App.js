import './App.css';
import { Overview, DatePick, UserInfo, VehicleSelect } from './components/Forms';
import HorizontalNonLinearStepper from './components/Stepper';

function App() {
  const forms = [
    <Overview />,
    <UserInfo />,
    <VehicleSelect />,
    <DatePick />
  ];

  function isOverviewCompleted() {
    return false;
  }

  return (
    <div className="App">
     <div className='card'>
      <h1>Rent a Vehical...</h1>
      <HorizontalNonLinearStepper forms={forms} isOverviewCompleted={isOverviewCompleted}/>
     </div>
    </div>
  );
}

export default App;
