import * as React from 'react';
import Box from '@mui/material/Box';
import LanguagesList from "../LanguagesList/LanguagesList";


export default function Body() {

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <LanguagesList />
        </Box>
    );
}