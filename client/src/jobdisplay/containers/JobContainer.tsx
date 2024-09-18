import JobDisplay from "../components/JobDisplay"
import { Typography, TextField, Box, Button, MenuItem, Select, InputLabel, FormControl, makeStyles } from '@mui/material';

export default function JobContainer() {
    return (
        <Box
        sx={{ width: "65%" }}
        >
            <JobDisplay />
        </Box>
    )
}