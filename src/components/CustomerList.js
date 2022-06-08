import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { customerDataState } from "../state";
import { useRecoilValue } from "recoil";

export default function CustomerList() {
	const customers = useRecoilValue(customerDataState);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 500 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Name and lastname</TableCell>
						<TableCell>E-mail</TableCell>
						<TableCell>City</TableCell>
						<TableCell>Birthdate</TableCell>
						<TableCell></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.map((customer) => (
						<TableRow>
							<TableCell>{customer.name}</TableCell>
							<TableCell>{customer.mail}</TableCell>
							<TableCell>{customer.city}</TableCell>
							<TableCell>{customer.birthdate}</TableCell>
							<TableCell>
								<Link to={"/customer/" + customer._id}>
									<Button>Details</Button>
								</Link>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
