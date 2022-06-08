import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddNewUser from "./routes/AddNewUser";
import CustomerDetails from "./components/CustomerDetails";
import EditCustomer from "./components/EditCustomer";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<RecoilRoot>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
					<Route path="newuser" element={<AddNewUser />} />
					<Route path="customer/:id" element={<CustomerDetails />} />
					<Route path="customer/:id/edit" element={<EditCustomer />} />
				</Routes>
			</BrowserRouter>
		</RecoilRoot>
	</React.StrictMode>
);

reportWebVitals();
