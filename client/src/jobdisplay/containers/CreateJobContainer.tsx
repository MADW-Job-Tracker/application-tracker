import CreateJob from "../components/CreateJob"
import { Box, Button, Dialog, DialogContent, AppBar, Toolbar, Typography, TextField } from '@mui/material';

export default function CreateJobContainer() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            // justifyContent="center"
            alignItems="center"
            marginTop={5}
        >
            <Toolbar>
                <Typography
                    variant="h2"
                    fontWeight="800"
                >
                    Job Application Tracker
                </Typography>
            </Toolbar>
            <CreateJob />
        </Box>

    )
}