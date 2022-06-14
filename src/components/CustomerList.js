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
import { styled } from "@mui/system";

const ClientCell = styled(TableCell)(({ theme }) => ({

	color: "blue"
}));

const ClientCellHeader = styled(TableCell)(({ theme }) => ({

	fontWeight: "bold"
}));


export default function CustomerList() {
	const customers = useRecoilValue(customerDataState);

	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 500 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<ClientCellHeader>Name and lastname</ClientCellHeader>
						<ClientCellHeader>E-mail</ClientCellHeader>
						<ClientCellHeader>City</ClientCellHeader>
						<ClientCellHeader>Birthdate</ClientCellHeader>
						<ClientCellHeader></ClientCellHeader>
					</TableRow>
				</TableHead>
				<TableBody>
					{customers.map((customer) => (
						<TableRow>
							<ClientCell>{customer.name}</ClientCell>
							<ClientCell>{customer.mail}</ClientCell>
							<ClientCell>{customer.city}</ClientCell>
							<ClientCell>{customer.birthdate}</ClientCell>
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
