import { useParams } from "react-router-dom";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useRecoilState } from "recoil";
import axios from "axios";
import { customerDataState } from "../state";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import { colorModeState } from "../state";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";

export default function EditCustomer() {
	const navigate = useNavigate();

	const api_url = "http://localhost:5000/api/";

	const params = useParams();

	const [data, setData] = useRecoilState(customerDataState);
	const customer = data.find((c) => c._id == params.id);

	const [colorMode, setColorMode] = useRecoilState(colorModeState);

	const newCustomer = {
		_id: customer._id,
		name: customer.name,
		mail: customer.mail,
		city: customer.city,
		birthdate: customer.birthdate,
	};

	function submit() {
		let tmp = [];
		tmp = data.map((o) => {
			if (o._id == params.id) return newCustomer;
			else return o;
		});

		setData(tmp);

		axios
			.patch(api_url + "customers/" + customer._id, newCustomer)
			.catch((e) => alert("Update customer data failed! " + e));

		navigate("/customer/" + params.id);
	}

	function handleChange(evt) {
		const value = evt.target.value;
		newCustomer[evt.target.name] = value;
	}

	return (
		<Box sx={{ textAlign: "center" }}>
			<Navbar heading="Customer details" />
			<Box component="form" sx={{ marginTop: 1, color: "#fff" }}>
				<Box
					component={Paper}
					sx={{
						maxWidth: 0.35,
						marginLeft: "auto",
						marginRight: "auto",
					}}>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.9 }}
						onChange={handleChange}
						defaultValue={customer.name}
						name="name"
						label="Name"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.9 }}
						onChange={handleChange}
						defaultValue={customer.mail}
						name="mail"
						label="E-mail"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.9 }}
						onChange={handleChange}
						defaultValue={customer.birthdate}
						name="birthdate"
						label="Birthdate"
						variant="outlined"
					/>
					<br></br>
					<TextField
						sx={{ marginTop: 2, minWidth: 0.9, marginBottom: 2 }}
						onChange={handleChange}
						defaultValue={customer.city}
						name="city"
						label="City"
						variant="outlined"
					/>
					<br></br>
				</Box>

				<Button
					color="secondary"
					sx={{ marginTop: 3 }}
					onClick={submit}
					variant="contained">
					Save
				</Button>
			</Box>
			<br></br>
		</Box>
	);
}
