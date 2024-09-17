import { useState } from 'react'
//import './App.css'
import JobDisplay from './jobdisplay/containers/JobDisplay';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <JobDisplay></JobDisplay>
  )
}

export default App
