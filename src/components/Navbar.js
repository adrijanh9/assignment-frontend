import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { colorModeState } from "../state";

export default function Navbar(props) {
	const [colorMode, setColorMode] = useRecoilState(colorModeState);

	let checked = colorMode == "light" ? false : true;

	function handleSwitch(evt) {
		setColorMode(evt.target.checked ? "dark" : "light");
	}

	return (
		<Box sx={{ backgroundColor: "green", flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h5"
						component="div"
						sx={{ marginLeft: 10, flexGrow: 1 }}>
						{props.heading}
					</Typography>
					<FontAwesomeIcon icon={faSun} />
					<Switch
						checked={checked}
						color="secondary"
						onChange={handleSwitch}></Switch>
					<FontAwesomeIcon icon={faMoon} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
