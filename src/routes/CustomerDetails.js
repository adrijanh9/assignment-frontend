import { useParams } from "react-router-dom";
import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { customerDataState } from "../state";
import axios from "axios";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";
import { colorModeState } from "../state";
import { grey } from "@mui/material/colors";

const ClientCell = styled(TableCell)(({ theme }) => ({
	color: "blue",
}));

const ClientCellHeader = styled(TableCell)(({ theme }) => ({
	fontWeight: "bold",
}));

export default function CustomerDetails() {
	const [colorMode, setColorMode] = useRecoilState(colorModeState);

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
		<Box sx={{ textAlign: "center" }} component="div">
			<Navbar heading="Customer details" />

			<TableContainer
				sx={{
					maxWidth: 0.5,
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: 1,
				}}
				component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<ClientCellHeader>Name and lastname</ClientCellHeader>
							<ClientCellHeader>E-mail</ClientCellHeader>
							<ClientCellHeader>City</ClientCellHeader>
							<ClientCellHeader>Birthdate</ClientCellHeader>
							<ClientCellHeader>Insurance price</ClientCellHeader>
						</TableRow>
					</TableHead>
					<TableBody>
						<ClientCell>{customer.name}</ClientCell>
						<ClientCell>{customer.mail}</ClientCell>
						<ClientCell>{customer.city}</ClientCell>
						<ClientCell>{customer.birthdate}</ClientCell>
						<ClientCell>{insurance === 0 ? "N/A" : insurance}</ClientCell>
					</TableBody>
				</Table>
			</TableContainer>

			<Link to={"/customer/" + customer._id + "/edit"}>
				<Button
					color="secondary"
					sx={{ marginTop: 1, marginLeft: 1 }}
					variant="contained">
					Edit
				</Button>
			</Link>

			<Button
				color="secondary"
				sx={{ marginTop: 1, marginLeft: 1 }}
				onClick={deleteCustomer}
				variant="contained">
				Delete
			</Button>
			<Button
				color="secondary"
				sx={{ marginTop: 1, marginLeft: 1 }}
				onClick={calculateInsurance}
				variant="contained">
				Calculate Insurance Price
			</Button>
		</Box>
	);
}
