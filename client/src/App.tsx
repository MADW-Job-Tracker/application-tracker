//import './App.css'
// import React from 'react';
import JobContainer from './jobdisplay/containers/JobContainer';
import CreateJobContainer from './jobdisplay/containers/CreateJobContainer';
import Box from '@mui/material/Box';

function App() {
  return (
    <>
      <CreateJobContainer />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <JobContainer />
      </Box>
    </>

  )
}

export default App
