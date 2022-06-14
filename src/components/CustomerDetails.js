import { useParams } from "react-router-dom";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { customerDataState } from "../state";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "./Navbar"

export default function CustomerDetails() {
	const params = useParams();
	const navigate = useNavigate();

	const [data, setData] = useRecoilState(customerDataState);
	const customer = data.find((c) => c._id == params.id);

	const api_url = "http://localhost:5000/api/";

	const [insurance, setInsurance] = React.useState(0);

	function deleteCustomer() {
		setData((oldState) => oldState.filter((c) => c._id != params.id));

		axios
			.delete(api_url + "customers/" + params.id)
			.then(alert("Customer record deleted!"))
			.catch((e) => alert("Delete customer record failed! " + e));

		navigate("/");
	}

	function calculateInsurance() {
		axios
			.get(api_url + "customers/" + params.id + "/insurance")
			.then((res) => {
				setInsurance(res.data.insurance);
			})
			.catch((e) => alert("Calculate insurance failed! " + e));
	}

	return (
		<Box sx={{textAlign: "center"}} component="div">
			<Navbar heading="Customer details"/>
			<Box sx={{ textAlign: "center" }}>

			<h4>Name and lastname: {customer.name}</h4>
			<h4>Email: {customer.mail}</h4>
			<h4>City: {customer.city}</h4>
			<h4>Birthdate: {customer.birthdate} (YYYY-MM-DD)</h4>
			<h4>Insurance price: {insurance}</h4>
			<Link to={"/customer/" + customer._id + "/edit"}>
				<Button sx={{ marginLeft: 1 }} variant="contained">
					Edit
				</Button>
			</Link>

			<Button
				sx={{ marginLeft: 1 }}
				onClick={deleteCustomer}
				variant="contained">
				Delete
			</Button>
			<Button
				sx={{ marginLeft: 1 }}
				onClick={calculateInsurance}
				variant="contained">
				Calculate Insurance Price
			</Button>
		</Box>

		</Box>
		
	);
}
