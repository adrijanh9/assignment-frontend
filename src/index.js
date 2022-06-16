import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { createTheme } from "@mui/material";

import AppContainer from "./AppContainer";

const defaultTheme = createTheme({
	palette: {
		primary: {
			main: "#2ca96b",
			contrastText: "#fff",
		},
		secondary: {
			main: "#a92c6b",
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<AppContainer />
		</RecoilRoot>
	</React.StrictMode>
);

reportWebVitals();
