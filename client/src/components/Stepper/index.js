// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const steps = ['Overview', 'User Info', 'Select vehicle', 'Select Date'];

// export default function HorizontalNonLinearStepper({ forms, isOverviewCompleted }) {
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [completed, setCompleted] = React.useState({});

//   const totalSteps = () => {
//     return steps.length;
//   };

//   const completedSteps = () => {
//     return Object.keys(completed).length;
//   };

//   const isLastStep = () => {
//     return activeStep === totalSteps() - 1;
//   };

//   const allStepsCompleted = () => {
//     return completedSteps() === totalSteps();
//   };

//   const handleNext = () => {
//     const newActiveStep =
//       isLastStep() && !allStepsCompleted()
//         ? steps.findIndex((step, i) => !(i in completed))
//         : activeStep + 1;
//     setActiveStep(newActiveStep);
//     handleCompleteStep()
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStep = (step) => () => {
//     setActiveStep(step);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setCompleted({});
//   };

//   const handleCompleteStep = () => {
//     const newCompleted = { ...completed };
//     newCompleted[activeStep] = true;
//     setCompleted(newCompleted);
//     handleNext();
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Stepper alternativeLabel activeStep={activeStep}>
//         {steps.map((label, index) => (
//           <Step key={label} completed={completed[index]}>
//             <StepButton
//               color="inherit"
//               onClick={handleStep(index)}
//               disabled={isOverviewCompleted() && index > 0}
//             >
//               {label}
//             </StepButton>
//           </Step>
//         ))}
//       </Stepper>
//       <div>
//         {allStepsCompleted() ? (
//           <>
//             <Typography sx={{ mt: 2, mb: 1 }}>
//               All steps completed - you&apos;re finished
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Box sx={{ flex: '1 1 auto' }} />
//               <Button onClick={handleReset}>Reset</Button>
//             </Box>
//           </>
//         ) : (
//           <>
//             <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//               {forms[activeStep]}
//             </Typography>
//             <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//               <Button
//                 color="inherit"
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 sx={{ mr: 1 }}
//               >
//                 Back
//               </Button>
//               <Box sx={{ flex: '1 1 auto' }} />
//               {isLastStep() ? (
//                 <Button
//                   onClick={handleCompleteStep}
//                 //   disabled={completed[activeStep]}
//                   sx={{ mr: 1 }}
//                 >
//                   {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Next'}
//                 </Button>
//               ) : (
//                 <Button
//                   onClick={handleNext}
//                   disabled={isOverviewCompleted() || completed[activeStep]}
//                   sx={{ mr: 1 }}
//                 >
//                   Next
//                 </Button>
//               )}
//             </Box>
//           </>
//         )}
//       </div>
//     </Box>
//   );
// }


const Stepper = () => {
  
}