import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Switch } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { colorModeState } from "../state";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
	const navigate = useNavigate();
	const [colorMode, setColorMode] = useRecoilState(colorModeState);

	function handleSwitch(evt) {
		setColorMode(evt.target.checked ? "dark" : "light");
	}

	function goHome() {
		navigate("/");
	}

	return (
		<Box sx={{ backgroundColor: "green", flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton onClick={goHome} sx={{ color: "#ffffff" }}>
						<FontAwesomeIcon icon={faHouse} />
					</IconButton>

					<Typography
						variant="h5"
						component="div"
						sx={{ marginLeft: 8, flexGrow: 1 }}>
						{props.heading}
					</Typography>
					<FontAwesomeIcon icon={faSun} />
					<Switch
						checked={colorMode === "light" ? false : true}
						color="secondary"
						onChange={handleSwitch}></Switch>
					<FontAwesomeIcon icon={faMoon} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
