import ThemeComponent from "@components/theme";

export default function DrawerLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
		<ThemeComponent>
        	{children}
    	</ThemeComponent>
    )
  }