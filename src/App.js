import React from "react";
import "./App.css";
import CustomerList from "./components/CustomerList";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { customerDataState } from "./state";
import Navbar from "./components/Navbar"
import axios from "axios";

function App() {
  const [data, setData] = useRecoilState(customerDataState);

	useEffect(() => {
		const api_url = "http://localhost:5000/api/";

		axios
			.get(api_url + "customers")
			.then((res) => {
				setData(res.data);
			})
			.catch((e) => alert("Fetch customer data failed! " + e));
	});

	return (
		<div className="App">

			<Navbar heading="Dashboard"/>
			<Box
				sx={{ maxWidth: 0.75, display: "block", margin: "auto", marginTop: 2 }}>
				<CustomerList></CustomerList>
			</Box>

			<Link to="/newuser">
				<Button color="secondary" sx={{ marginTop: 2}} variant="contained">
					Add new user +
				</Button>
			</Link>
		</div>
	);
}

export default App;
