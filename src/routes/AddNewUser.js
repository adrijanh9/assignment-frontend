import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import axios from "axios";
import { customerDataState } from "../state";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { colorModeState } from "../state";
import { grey } from "@mui/material/colors";
import { Paper } from "@mui/material";

export default function AddNewUser() {

	const navigate = useNavigate();

	const [data, setData] = useRecoilState(customerDataState);

	const newCustomer = {};

	function handleChange(evt) {
		const value = evt.target.value;
		newCustomer[evt.target.name] = value;
	}

	function submit() {
		setData((oldState) => [...oldState, newCustomer]);

		const api_url = "http://localhost:5000/api/";
		axios
			.post(api_url + "customers/", newCustomer)
			.catch((e) => alert("Add customer record failed! " + e));

		navigate(-1);
	}

	return (
		<Box sx={{ textAlign: "center" }}>
			<Navbar heading="Add new customer" />
			<Box component="form" sx={{ marginTop: 2 }}>
				<Box
					component={Paper}
					sx={{
						maxWidth: 0.2,
						marginLeft: "auto",
						marginRight: "auto",
					}}>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.2 }}
						onChange={handleChange}
						value={newCustomer.name}
						name="name"
						label="Name and lastname"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.2 }}
						onChange={handleChange}
						value={newCustomer.mail}
						name="mail"
						label="E-mail"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.2 }}
						onChange={handleChange}
						value={newCustomer.birthdate}
						name="birthdate"
						label="Birthdate (YYYY-MM-DD)"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.2, marginBottom: 2 }}
						onChange={handleChange}
						value={newCustomer.city}
						name="city"
						label="City"
						variant="outlined"
					/>
					<br></br>
				</Box>
				<Button
					onClick={submit}
					color="secondary"
					sx={{ marginTop: 3 }}
					variant="contained">
					Submit
				</Button>
			</Box>
		</Box>
	);
}
