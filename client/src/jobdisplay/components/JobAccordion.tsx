import type { data } from "./JobDisplay";
import { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, TextField } from "@mui/material";


interface props {
    data: data,
}

export default function JobAccordion(props: props) {
    const [company, setCompany] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [salary, setSalary] = useState<number>(0);
    const [status, setStatus] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const { data } = props;

    useEffect(() => {
        setCompany(data.company);
        setTitle(data.jobTitle);
        setDescription(data.description);
        setSalary(data.salary);
        setStatus(data.status);
        setDate(data.date);
    }, [company, title, description, salary, status, date])

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
                        <TextField id="filled-basic" label="Company" variant="filled" defaultValue={company} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Job Title" variant="filled" value={title} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Description" variant="filled" value={description} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Salary" variant="filled" value={salary} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Status" variant="filled" value={status} />
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Date" variant="filled" value={date} />
                    </span>
                    <br/>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}