import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function NavBar({currentPage, next, previous}) {
    return (
        <div >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Clear My Record
                    </Typography>
                    {currentPage > 0 && <Button color="inherit" onClick={previous}>Back</Button>}
                    <Button color="inherit" onClick={next}>Next</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
