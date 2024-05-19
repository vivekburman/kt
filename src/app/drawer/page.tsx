"use client";
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import DrawerComponent from '@components/drawer';
import FlowNodeSelector from '@components/flownodeselector';

export default function Page() {
    const [open, setOpen] = useState(true);
    const toggleDrawer = (flag: boolean) => {
        setOpen(flag);
    }
    return (
        <div className="flex justify-between h-screen">
            <Drawer open={open} onClose={() => toggleDrawer(false)} anchor="right">
                <DrawerComponent>
					<FlowNodeSelector/>
				</DrawerComponent>
            </Drawer>
        </div>
    );
}