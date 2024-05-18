"use client";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
export default function DrawerComponent() {
    return (
        <div className="h-full">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
            </Box>
        </div>
    );
}