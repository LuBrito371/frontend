import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/CadastroUsuario";
import EditPerfil from "./pages/EditPerfil";

export default function Routes(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact>
					<Home />
				</Route>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="/home">
					<Home />
				</Route>

				<Route path="/cadastro">
					<Cadastro />
				</Route>

				<Route path="/edit">
					<EditPerfil/>
				</Route>
			</Switch>
		</Router>
	);
}