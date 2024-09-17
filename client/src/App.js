import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
//import './App.css'
import JobDisplay from './jobdisplay/containers/JobDisplay';
function App() {
    const [count, setCount] = useState(0);
    return (_jsx(JobDisplay, {}));
}
export default App;
