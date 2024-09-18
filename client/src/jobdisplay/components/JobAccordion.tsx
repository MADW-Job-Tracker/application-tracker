import type { data } from "./JobDisplay";
import { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";


interface props {
    data: data,
    updater: Function,
}

export default function JobAccordion(props: props) {
    const [company, setCompany] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [salary, setSalary] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const { data, updater } = props; //destructs from props

    //sets the initial state. runs only once
    useEffect(() => { 
        setCompany(data.company);
        setTitle(data.jobTitle);
        setDescription(data.description);
        setSalary(data.salary);
        setStatus(data.status);
        setDate(data.date);
    }, []);
    //handles when the user edits data
    const changeHandler = ():void => {
        updater();
    }
    return(
        <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                { company }
                </AccordionSummary>
                <AccordionDetails>
                    <span>
                        <TextField id="filled-basic" label="Company" variant="filled" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Job Title" variant="filled" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Description" variant="filled" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Salary" variant="filled" value={salary} onChange={(e) => setSalary(Number(e.target.value))}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Status" variant="filled" value={status} onChange={(e) => setStatus(e.target.value)}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Date" variant="filled" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </span>
                    <br/>
                    <Button variant="contained" onClick={() => changeHandler()}>Submit Changes</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}