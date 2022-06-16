import React from "react";
import { createTheme } from "@mui/material";
import { useRecoilState } from "recoil";
import { colorModeState } from "./state";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import AddNewUser from "./routes/AddNewUser";
import CustomerDetails from "./routes/CustomerDetails";
import EditCustomer from "./routes/EditCustomer";
import { CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function AppContainer() {
	const [colorMode, setColorMode] = useRecoilState(colorModeState);

	const lightTheme = createTheme({
		palette: {
			background: { default: "#ffffff" },
			primary: {
				light: "#64d8cb",
				main: "#26a69a",
				dark: "#00766c",
				contrastText: "#ffffff",
			},
			secondary: {
				light: "#ff77a9",
				main: "#ec407a",
				dark: "#b4004e",
				contrastText: "#ffffff",
			},
		},
	});

	const darkTheme = createTheme({
		palette: {
			background: { default: grey[700] },

			primary: {
				light: "#64d8cb",
				main: "#26a69a",
				dark: "#00766c",
				contrastText: "#ffffff",
			},
			secondary: {
				light: "#ff77a9",
				main: "#ec407a",
				dark: "#b4004e",
				contrastText: "#ffffff",
			},
		},
	});

	//const theme = useTheme()
	return (
		<ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
			<CssBaseline />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="newuser" element={<AddNewUser />} />
					<Route path="customer/:id" element={<CustomerDetails />} />
					<Route path="customer/:id/edit" element={<EditCustomer />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}
