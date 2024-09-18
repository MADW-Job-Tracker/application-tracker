import { useState } from 'react'
// import { Box, Button } from '@mui/material';
import { Typography, TextField, Box, Button, MenuItem, Select, InputLabel, FormControl, makeStyles } from '@mui/material';
// import { Description } from '@mui/icons-material';
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
        status: 'Applied',
    });

    const [errors, setErrors] = useState({
        companyName: '',
        // jobTitle: '',
        salary: '',
        // status: '',
        general: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
    const handleChange = (event: any) => {
        const fieldName = event.target.name; // Get the name of the field
        const fieldValue = event.target.value; // Get the new value from the field
        setJob((previousJob: any) => ({
            ...previousJob,        // Keep all previous fields unchanged
            [fieldName]: fieldValue // Update the field with the new value
        }));
        // setErrors((previousErrors: any) => ({
        //     ...previousErrors,        // Keep all previous fields unchanged
        //     [fieldName]: fieldValue // Update the field with the new value
        // }));
    };

    const stopIfErrors = (job: any) => {
        const newErrors: any = {};
        if (!job.companyName) newErrors.companyName = 'Company name is required';
        // if (!job.jobTitle) newErrors.jobTitle = 'Job title is required';
        if (!job.salary) newErrors.salary = 'Salary is required';
        // if (!job.status) newErrors.status = 'Status is required';
        setErrors(newErrors);
        // If there are no errors, return true; else return false
        if (Object.keys(newErrors).length !== 0) throw Error('invalid submission');
    }

    const handleSubmit = async (e: React.FormEvent) => {
        const {
            companyName,
            jobTitle,
            link,
            status
        } = job

        try {
            e.preventDefault();
            const salary = Number(job.salary)
            stopIfErrors(job);

            // I will just create the request to the backend here to write to the db
            const result = await fetch('http://localhost:8080/application/create',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        company: companyName,
                        title: jobTitle,
                        description: link,
                        salary,
                        status
                    })
                }
            )
            console.log('yo', result)

            // add in a success message afterwards
            // Check if the request was successful
            if (result.ok) {
                setSuccessMessage("Success");

                // Clear the form after successful submission
                setJob({
                    companyName: '',
                    jobTitle: '',
                    salary: '',
                    link: '',
                    status: ''
                });
                // const errorData = await result.json();
                // throw new Error(errorData.message || 'Failed to create application');
            }
            else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    general: 'Failed to submit application'
                }));
            }
        }
        catch (error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                general: 'An error occurred. Please try again.'
            }));
        }
    };

    return (
        <>
            <Box
                display="flex"
                marginTop={5}
                gap={2}
            >
                <TextField
                    variant="filled"
                    label={!!errors.companyName ? "Company Name is required" : "Company Name"}
                    name="companyName"
                    value={job.companyName}
                    onChange={handleChange}
                    error={!!errors.companyName}
                    // helperText={errors.companyName}
                    sx={{ backgroundColor: 'white' }}
                    fullWidth
                />
                <TextField
                    variant="filled"
                    label="Job Title"
                    name="jobTitle"
                    value={job.jobTitle}
                    onChange={handleChange}
                    // error={!!errors.jobTitle}
                    // helperText={errors.jobTitle}
                    sx={{ backgroundColor: 'white' }}
                    fullWidth
                />
                <TextField
                    variant="filled"
                    label={!!errors.salary ? "Salary is required" : "Salary"}
                    name="salary"
                    type={"number"}
                    value={job.salary}
                    onChange={handleChange}
                    error={!!errors.salary}
                    // helperText={errors.salary}
                    sx={{ backgroundColor: 'white' }}
                    fullWidth
                />
                <TextField
                    variant="filled"
                    label="Link"
                    name="link"
                    value={job.link}
                    onChange={handleChange}
                    sx={{ backgroundColor: 'white' }}
                    fullWidth
                />
                <FormControl fullWidth
                    variant="filled"
                    sx={{ backgroundColor: 'white' }}
                >
                    <InputLabel>Status</InputLabel>
                    <Select
                        label="Status"
                        name="status"
                        value={job.status}
                        onChange={handleChange}
                    >
                        <MenuItem value="Applied">Applied</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Offer">Offer</MenuItem>
                        <MenuItem value="Rejected">Rejected</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" onClick={handleSubmit}>Save</Button>
                {/* {errors.general && <Typography color="error">{errors.general}</Typography>} */}
            </Box >
            <Box>
                {successMessage && <Typography color="green">{successMessage}</Typography>}
            </Box>
        </>
    )
}