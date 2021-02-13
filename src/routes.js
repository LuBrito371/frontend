import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cadastro from "./pages/CadastroUsuario";
import EditPerfil from "./pages/EditPerfil";
<<<<<<< HEAD
import Loja from "./pages/Loja";
=======

>>>>>>> 1c7f7c3c83da566d2a485e8b8cb56a35128058c3
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
<<<<<<< HEAD
					</Route>

					<Route path="/loja">
					<Loja/>
					</Route>
=======
				</Route>
>>>>>>> 1c7f7c3c83da566d2a485e8b8cb56a35128058c3
			</Switch>
		</Router>
	);
}