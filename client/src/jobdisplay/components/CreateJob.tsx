import { useState } from 'react'
// import { Box, Button } from '@mui/material';
import { TextField, Box, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import Input from '@mui/joy/Input';

// interface JobFormProps {
//     initialData?: Job;
//     onSave: (job: Job) => void;
// }

// interface Job {
//     id?: number;
//     companyName: string;
//     jobTitle: string;
//     salary: string;
//     status: string;
// }

export default function CreateJob() {

    const [job, setJob] = useState({
        companyName: '',
        jobTitle: '',
        salary: '',
        link: '',
        status: 'Applied'
    });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const handleChange = (e: any) => {
        setJob((prev: any) => ({ ...prev, [e.target.name!]: e.target.value }));
    };

    const handleSubmit = () => {
        // props.onSave(job);
        // I will just create the request to the backend here to write to the db
        
    };

    // const [count, setCount] = useState(0)
    return (
        // <Box
        //     marginTop={5}
        // >
        //     <Button
        //         variant="contained"
        //         onClick={() => setCount((count) => count + 1)}
        //     >
        //         Create Job {count}
        //     </Button>
        // </Box>
        <Box
            display="flex"
            marginTop={5}
            gap={2}
        >
            <TextField
                label="Company Name"
                name="companyName"
                value={job.companyName}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
                fullWidth
            />
            <TextField
                label="Job Title"
                name="jobTitle"
                value={job.jobTitle}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
                fullWidth
            />
            <TextField
                label="Salary"
                name="salary"
                value={job.salary}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
                fullWidth
            />
            <TextField
                label="Link"
                name="link"
                value={job.link}
                onChange={handleChange}
                sx={{ backgroundColor: 'white' }}
                fullWidth
            />
            <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                    label="Status"
                    name="status"
                    value={job.status}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }}
                >
                    <MenuItem value="Applied">Applied</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Offer">Offer</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" onClick={handleSubmit}>Save</Button>
        </Box >
    )
}