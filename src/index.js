import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewUser from "./routes/AddNewUser";
import CustomerDetails from "./components/CustomerDetails";
import EditCustomer from "./components/EditCustomer";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { colorModeState } from "./state";

const defaultTheme = createTheme({
    palette: {
      primary: {
        //light: '#757ce8',
        main: '#2ca96b',
        //dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        //light: '#ff7961',
        main: '#a92c6b',
        //dark: '#ba000d',
        //ontrastText: '#000',
      },
    },
  });

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
	<React.StrictMode>
		<ThemeProvider theme={defaultTheme}>
			<RecoilRoot>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="newuser" element={<AddNewUser />} />
						<Route path="customer/:id" element={<CustomerDetails />} />
						<Route path="customer/:id/edit" element={<EditCustomer />} />
					</Routes>
				</BrowserRouter>
			</RecoilRoot>
		</ThemeProvider>
	</React.StrictMode>
);

reportWebVitals();
