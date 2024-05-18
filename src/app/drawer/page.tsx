"use client";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState } from 'react';
import DrawerComponent from '@components/drawer';

export default function Page() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = (flag: boolean) => {
        setOpen(flag);
    }
    return (
        <div className="flex justify-between h-screen">
            <div>
                <Button variant="contained" onClick={() => toggleDrawer(true)}>Open drawer</Button>
            </div>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
                <DrawerComponent />
            </Drawer>
        </div>
    );
}