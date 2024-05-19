"use client";
export default function DrawerComponent({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
    return (
        <div className="h-full kts-drawer-component">
			{children}
        </div>
    );
}