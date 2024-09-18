import type { data } from "./JobDisplay";
import { useState, useEffect } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, TextField, Button } from "@mui/material";


interface props {
    data: data,
    updater: Function,
}

export default function JobAccordion(props: props) {
    const [ID, setID] = useState<number>(0);
    const [company, setCompany] = useState<string>('');
    const [title, setTitle] = useState<string | null>('');
    const [description, setDescription] = useState<string | null>('');
    const [salary, setSalary] = useState<number | null>(0);
    const [status, setStatus] = useState<string>('');
    const [date, setDate] = useState<string | null>('');
    const { data, updater } = props; //destructs from props

    //sets the initial state. runs only once
    useEffect(() => { 
        setID(data.id);
        setCompany(data.company);
        setTitle(data.title);
        setDescription(data.description);
        setSalary(data.salary);
        setStatus(data.status);
        setDate(data.date);
    }, [data]);
    //handles when the user edits data
    const changeHandler = async (): Promise<void> => {
        try{
            const updateData = await fetch("http://localhost:8080/application/update", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: ID,
                    company: company,
                    title: title,
                    description: description,
                    salary: salary,
                    status: status,
                })
            })
            const response = await updateData.json();
            console.log(response);
            updater();
        }
        catch (error){
            if(error instanceof Error){
                console.error(error);
            }
        }
    }

    const deleteJob = async (): Promise<void> => {
        try {
            const deleteData = await fetch("http://localhost:8080/application/delete", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    company: company,
                    title: title,
                    description: description,
                })
            })
            const response = deleteData.json();
            console.log(response)
            updater();
        }
        catch(error){
            console.log(error)
        }
    }


    return(
        <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%'  }}>
                        <div><b>Company:</b> {company}</div>
                        <div><b>Job Title:</b> {title}</div>
                        <div><b>Description:</b> {description}</div>
                        <div><b>Salary:</b> {salary}</div>
                        <div><b>Status:</b> {status}</div>
                    </div>

                </AccordionSummary>
                <AccordionDetails
                sx={{ display: 'flex', flexDirection: 'row'}}>
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
                        <TextField id="filled-basic" label="Salary" variant="filled" value={salary} type="number" onChange={(e) => setSalary(Number(e.target.value))}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Status" variant="filled" value={status} onChange={(e) => setStatus(e.target.value)}/>
                    </span>
                    <br/>
                    <span>
                        <TextField id="filled-basic" label="Date" variant="filled" value={date}/>
                    </span>
                    <br/>
                    <Button variant="contained" onClick={deleteJob}>Delete</Button>
                    <Button variant="contained" onClick={() => changeHandler()}>Submit Changes</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}