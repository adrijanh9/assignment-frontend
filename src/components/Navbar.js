import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { createTheme, Switch } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
	return (
		<Box sx={{ backgroundColor: "green", flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h5" component="div" sx={{marginLeft: 10, flexGrow: 1 }}>
						{props.heading}
					</Typography>
					<FontAwesomeIcon icon={faSun} />
					<Switch></Switch>
					<FontAwesomeIcon icon={faMoon} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
